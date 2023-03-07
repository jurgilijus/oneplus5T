import React from "react";

// CSS
import "./Calender.css";

function Calender({ day, date }) {
  const dayForCalendar = day.slice(0, 1);
  return (
    <div className="calendar-conteiner">
      <div className="calendar-header">
        <p className="calendar-month">march</p>
        <p className="plus">+</p>
      </div>
      <div className="calendar-content">
        <div className="calendar-day">
          <p className="day">{dayForCalendar}</p>
          <p className="date">{date}</p>
        </div>
        <p className="calendaer-txt">Nothing today</p>
      </div>
    </div>
  );
}

export default Calender;
