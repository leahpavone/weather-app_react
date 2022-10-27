import dayjs from "dayjs";
import ForecastHourlyCard from "./ForecastHourlyCard";
import uvIcon from "../assets/uv-index.svg";
import humidityIcon from "../assets/humidity.svg";
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
                {/* <div className="forecast-description">
                  {forecastday.day.condition.text}
                </div> */}

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

                {/* <div className="forecast-weather-ctr"> */}
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
                  {/* </div> */}
                  {/* <div className="top-wd-ctr"> */}
                  {/* <div className="wd-ctr"> */}
                  {/* <div className="wd-img-ctr">
                        <img
                          className="forecast-avg-humidity-img"
                          src={humidityIcon}
                          alt="humidity icon"
                        />
                      </div>
                      <div className="forecast-avg-humidity">
                        {forecastday.day.avghumidity}%
                      </div>
                    </div> */}
                  {/* <div className="wd-ctr">
                      <div className="wd-img-ctr">
                        <img
                          className="forecast-uv-img"
                          src={uvIcon}
                          alt="uv icon"
                        />
                      </div>
                      <div className="forecast-uv-index">
                        {forecastday.day.uv}
                      </div>
                    </div> */}
                  {/* </div> */}
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
