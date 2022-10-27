import dayjs from "dayjs";
import CurrentHourlyCard from "./CurrentHourlyCard";
import feelsLikeIcon from "../assets/feels-like.svg";
import uvIcon from "../assets/uv-index.svg";
import humidityIcon from "../assets/humidity.svg";
import sunriseIcon from "../assets/sunrise1.svg";
import sunsetIcon from "../assets/sunset1.svg";

function CurrentCard({ weatherData }) {
  const hourForecast = weatherData.forecast.forecastday.find(
    (forecast) =>
      forecast.date ===
      dayjs(weatherData.location.localtime).format("YYYY-MM-DD")
  );

  const currentTime = weatherData.location.localtime;
  const lasthour = hourForecast.hour[23].time;

  return (
    <>
      <div className="current-card">
        <div className="f-symbol">°F</div>
        <div className="city">
          {weatherData.location.name}, {weatherData.location.region}
        </div>
        <div className="date-time-ctr">
          <div className="date">
            {dayjs(weatherData.forecast.forecastday.date).format(
              "dddd, MMMM D"
            )}
          </div>
          <div className="city-time">
            {dayjs(weatherData.location.localtime).format("h:mm A")}
          </div>
        </div>

        <div className="temp-desc-ctr">
          <div className="temp-desc1">
            <img
              className="temp-icon"
              src={weatherData.current.condition.icon}
              alt="temp icon"
            />
            <div className="description">
              {weatherData.current.condition.text}
            </div>
          </div>

          <div className="temp-desc2">
            <div className="current-temp">
              {Math.trunc(weatherData.current.temp_f)}°
            </div>

            <div className="hl-ctr">
              <div className="temp-range-ctr">
                <div className="temp-range-label">Low</div>
                <div className="mintemp">
                  {Math.trunc(hourForecast.day.mintemp_f)}°
                </div>
              </div>
              <div className="temp-range-ctr">
                <div className="temp-range-label">High</div>
                <div className="maxtemp">
                  {Math.trunc(hourForecast.day.maxtemp_f)}°
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="times-ctr">
          {hourForecast &&
            hourForecast.hour
              .filter((hour) => {
                return (
                  dayjs(hour.time).format("HH") >=
                    dayjs(currentTime).format("HH") &&
                  dayjs(hour.time).format("HH") <= dayjs(lasthour).format("HH")
                );
              })
              .map((hour, index) => {
                return (
                  <CurrentHourlyCard
                    weatherData={weatherData}
                    index={index}
                    key={index}
                    hour={hour}
                  />
                );
              })}
        </div>
      </div>

      <div className="weather-content">
        <div className="weather-desc-ctr">
          <img
            className="feels-like-img"
            src={feelsLikeIcon}
            alt="feels like icon"
          />
          <div className="weather-desc-text">
            {Math.trunc(weatherData.current.feelslike_f)}°
          </div>
        </div>

        <div className="weather-desc-ctr">
          <img className="uv-img" src={uvIcon} alt="uv icon" />
          <div className="weather-desc-text">{weatherData.current.uv}</div>
        </div>

        <div className="weather-desc-ctr">
          <img
            className="avg-humidity-img"
            src={humidityIcon}
            alt="humidity icon"
          />
          <div className="weather-desc-text">
            {weatherData.current.humidity}%
          </div>
        </div>

        <div className="weather-desc-ctr">
          <img src={sunriseIcon} alt="sunrise icon" className="sun-icon" />
          <div className="weather-desc-text">
            {hourForecast.astro.sunrise.replace(/^0+/, "")}
          </div>
        </div>

        <div className="weather-desc-ctr">
          <img src={sunsetIcon} alt="sunset icon" className="sun-icon" />
          <div className="weather-desc-text">
            {hourForecast.astro.sunset.replace(/^0+/, "")}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCard;
