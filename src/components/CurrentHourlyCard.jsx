import { useState, useEffect } from "react";
import dayjs from "dayjs";

function CurrentHourlyCard({ hour, index, weatherData }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const currentTime = dayjs(weatherData.location.localtime).format("h A");
    const hourTime = dayjs(hour.time).format("h A");

    if (currentTime === hourTime) {
      setActive(currentTime);
    } else {
      setActive(null);
    }
  }, [hour, weatherData]);

  return (
    <div className={active ? "time-ctr active" : "time-ctr"}>
      <div className="time-item">{dayjs(hour.time).format("h A")}</div>
      <img src={hour.condition.icon} alt="temp icon" className="t-icon" />
      <div className="time-temp">{Math.trunc(hour.temp_f)}°</div>
    </div>
  );
}

export default CurrentHourlyCard;
