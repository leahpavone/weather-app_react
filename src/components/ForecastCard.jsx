import dayjs from "dayjs";
import ForecastHourlyCard from "./ForecastHourlyCard";
import sunriseIcon from "../assets/sunrise1.svg";
import sunsetIcon from "../assets/sunset1.svg";

function ForecastCard({ weatherData }) {
  const forecastDays = weatherData.forecast.forecastday;

  return (
    <div className="forecast-ctr">
      {forecastDays
        .filter(
          (forecastday) => forecastday.date !== dayjs().format("YYYY-MM-DD")
        )
        .map((forecastday, index) => {
          return (
            <div
              className="forecast"
              index={index}
              key={index}
              forecastday={forecastday}
            >
              <div className="forecast-content">
                <div className="forecast-description-ctr">
                  <div className="forecast-date">
                    {dayjs(forecastday.date).format("dddd M/D")}
                  </div>
                  <img
                    className="forecast-temp-icon"
                    src={forecastday.day.condition.icon}
                    alt="temp icon"
                  />
                </div>

                <div className="forecast-lh">
                  <div className="forecast-it-ctr">
                    <div className="forecast-temp-label">Low</div>
                    <div className="forecast-mintemp">
                      {Math.trunc(forecastday.day.mintemp_f)}°
                    </div>
                  </div>
                  <div className="forecast-it-ctr">
                    <div className="forecast-temp-label">High</div>
                    <div className="forecast-maxtemp">
                      {Math.trunc(forecastday.day.maxtemp_f)}°
                    </div>
                  </div>
                </div>

                <div className="weather-list">
                  <div className="forecast-weather-desc-ctr">
                    <img
                      src={sunriseIcon}
                      alt="sunrise icon"
                      className="forecast-sun-icon"
                    />
                    <div className="forecast-sunrise">
                      {forecastday.astro.sunrise.replace(/^0+/, "")}
                    </div>
                  </div>
                  <div className="forecast-weather-desc-ctr">
                    <img
                      src={sunsetIcon}
                      alt="sunset icon"
                      className="forecast-sun-icon"
                    />
                    <div className="forecast-sunset">
                      {forecastday.astro.sunset.replace(/^0+/, "")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="forecast-times-ctr">
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
