import React from "react";

// CSS
import "./Clock.css";

function Clock({ hours, minutes, day, month, date }) {
  return (
    <div className="clock-conteiner">
      <h1 className="clock">
        {hours}:{minutes}
      </h1>
      <div className="date">
        <p>{day},</p>
        <p>{month}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Clock;
