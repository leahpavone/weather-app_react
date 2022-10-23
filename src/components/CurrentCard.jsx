import dayjs from "dayjs";
import CurrentHourlyCard from "./CurrentHourlyCard";
import feelsLikeIcon from "../assets/feels-like.png";
import uvIcon from "../assets/uv-index.png";
import humidityIcon from "../assets/humidity.png";
import sunriseIcon from "../assets/sunrise1.png";
import sunsetIcon from "../assets/sunset1.png";

function CurrentCard({ weatherData }) {
  const hourForecast = weatherData.forecast.forecastday.find(
    (forecast) =>
      forecast.date ===
      dayjs(weatherData.location.localtime).format("YYYY-MM-DD")
  );

  return (
    <>
      <div className="upper-content">
        <div className="date">
          {dayjs(weatherData.forecast.forecastday.date).format("dddd M/D")}
        </div>
        <img className="temp-icon" src={weatherData.current.condition.icon} />
        <div className="city-time-ctr">
          <div className="current-location">
            {weatherData.location.name}
            {/* {weatherData.location.region} */}
          </div>
          <div className="local-time">
            {dayjs(weatherData.location.localtime).format("h:mm A")}
          </div>
        </div>
        <div className="temp-ctr">
          <div className="t-ctr">
            <div className="description">
              {weatherData.current.condition.text}
            </div>
            <div className="current-temp">
              {Math.trunc(weatherData.current.temp_f)}° F
            </div>
            <div className="hl-ctr">
              <div className="temp-range-ctr">
                <div className="temp-range-label">Low</div>
                <div className="mintemp">
                  {Math.trunc(hourForecast.day.mintemp_f)}° F
                </div>
              </div>
              <div className="temp-range-ctr">
                <div className="temp-range-label">High</div>
                <div className="maxtemp">
                  {Math.trunc(hourForecast.day.maxtemp_f)}° F
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="times-ctr">
          {hourForecast &&
            hourForecast.hour.map((hour, index) => {
              return (
                <CurrentHourlyCard index={index} key={index} hour={hour} />
              );
            })}
        </div>
      </div>

      <div className="weather-content">
        <div className="weather-desc-ctr">
          <img className="feels-like-img" src={feelsLikeIcon} />
          <div className="feels-like">
            {Math.trunc(weatherData.current.feelslike_f)}° F
          </div>
        </div>

        <div className="weather-desc-ctr">
          <img className="uv-img" src={uvIcon} />
          <div className="uv-index">{weatherData.current.uv}</div>
        </div>

        <div className="weather-desc-ctr">
          <img className="avg-humidity-img" src={humidityIcon} />
          <div className="avg-humidity">{weatherData.current.humidity}%</div>
        </div>

        <div className="weather-desc-ctr">
          <img src={sunriseIcon} alt="sunrise icon" className="sun-icon" />
          <div className="sunrise">{hourForecast.astro.sunrise}</div>
        </div>

        <div className="weather-desc-ctr">
          <img src={sunsetIcon} alt="sunset icon" className="sun-icon" />
          <div className="sunset">{hourForecast.astro.sunset}</div>
        </div>
      </div>
    </>
  );
}

export default CurrentCard;
