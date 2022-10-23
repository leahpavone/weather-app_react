import dayjs from "dayjs";

function CurrentHourlyCard({ hour, index }) {
  return (
    <div className="time-ctr" hour={hour}>
      <div className="time-item">{dayjs(hour.time).format("h a")}</div>
      <img
        src={hour.condition.icon}
        alt="temp icon"
        className="t-icon temp-icon-t12a"
      />
      <div className="time-temp-12a">{Math.trunc(hour.temp_f)}°</div>
    </div>
  );
}

export default CurrentHourlyCard;
