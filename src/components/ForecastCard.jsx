import dayjs from "dayjs";
import ForecastHourlyCard from "./ForecastHourlyCard";
import uvIcon from "../assets/uv-index.png";
import humidityIcon from "../assets/humidity.png";
import sunriseIcon from "../assets/sunrise1.png";
import sunsetIcon from "../assets/sunset1.png";

function ForecastCard({ weatherData }) {
  const forecastDays = weatherData.forecast.forecastday.slice(1, 3);
  console.log(forecastDays);
  console.log(forecastDays.hour);

  return (
    <div className="forecast-ctr">
      {forecastDays.map((forecastday, index) => {
        return (
          <div
            className="forecast-2"
            index={index}
            key={index}
            forecastday={forecastday}
          >
            <div className="forecast-content">
              <div className="description-ctr-f">
                <div className="date-f2">
                  {dayjs(forecastday.date).format("dddd M/D")}
                </div>
                <img
                  className="temp-icon-f2"
                  src={forecastday.day.condition.icon}
                />
              </div>
              <div className="description-f2">
                {forecastday.day.condition.text}
              </div>
              <div className="it-ctr-f">
                <div className="temp-label-f">Average</div>
                <div className="avgtemp-f2">
                  {Math.trunc(forecastday.day.avgtemp_f)}° F
                </div>
              </div>
              <div className="lh-f">
                <div className="it-ctr-f">
                  <div className="temp-label-f">Low</div>
                  <div className="mintemp-f2">
                    {Math.trunc(forecastday.day.mintemp_f)}° F
                  </div>
                </div>
                <div className="it-ctr-f">
                  <div className="temp-label-f">High</div>
                  <div className="maxtemp-f2">
                    {Math.trunc(forecastday.day.maxtemp_f)}° F
                  </div>
                </div>
              </div>
              <div className="weather-ctr-f">
                <div className="weather-list">
                  <div className="weather-desc-ctr-f">
                    <img
                      src={sunriseIcon}
                      alt="sunrise icon"
                      className="sun-icon-f"
                    />
                    <div className="sunrise-f2">
                      {forecastday.astro.sunrise}
                    </div>
                  </div>
                  <div className="weather-desc-ctr-f">
                    <img
                      src={sunsetIcon}
                      alt="sunset icon"
                      className="sun-icon-f"
                    />
                    <div className="sunset-f2">{forecastday.astro.sunset}</div>
                  </div>
                </div>
                <div className="top-wd-ctr">
                  <div className="wd-ctr">
                    <div className="wd-img-ctr">
                      <img className="avg-humidity-img-f" src={humidityIcon} />
                    </div>
                    <div className="avg-humidity-f2">
                      {forecastday.day.avghumidity}%
                    </div>
                  </div>
                  <div className="wd-ctr">
                    <div className="wd-img-ctr">
                      <img className="uv-img-f" src={uvIcon} />
                    </div>
                    <div className="uv-index-f2">{forecastday.day.uv}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="times-ctr-f">
              {forecastday.hour.map((hour, index) => (
                <ForecastHourlyCard hour={hour} index={index} key={index} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastCard;
