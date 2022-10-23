import dayjs from "dayjs";

function ForecastHourlyCard({ hour, index }) {
  return (
    <div className="time-ctr-f" hour={hour} key={index}>
      <div className="f-time">{dayjs(hour.time).format("h a")}</div>
      <div className="f-temp">{Math.trunc(hour.temp_f)}</div>
    </div>
  );
}

export default ForecastHourlyCard;
