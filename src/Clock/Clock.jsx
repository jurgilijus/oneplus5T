import React from "react";
import TimeRules from "../TimeRules";

// CSS
import "./Clock.css";

function Clock() {
  const time = new Date();
  const timeRules = new TimeRules();

  return (
    <div className="clock-conteiner">
      <h1 className="clock">
        {timeRules.addZero(time.getHours())}:
        {timeRules.addZero(time.getMinutes())}
      </h1>
      <p className="date">
        {timeRules.weekDays[time.getDay() - 1]},
        {timeRules.months[time.getMonth()]}
        {time.getDate()}
      </p>
    </div>
  );
}

export default Clock;
