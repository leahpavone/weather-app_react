import dayjs from "dayjs";

function ForecastHourlyCard({ hour, index }) {
  return (
    <div className="forecast-time-ctr" hour={hour} key={index}>
      <div className="forecast-time">{dayjs(hour.time).format("h A")}</div>
      <div className="forecast-temp">{Math.trunc(hour.temp_f)}°</div>
    </div>
  );
}

export default ForecastHourlyCard;
