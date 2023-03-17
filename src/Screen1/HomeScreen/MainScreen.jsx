import React from "react";
import Apps from "../Apps/Apps";
import Calender from "../Calender/Calender";
import Clock from "../Clock/Clock";
import Weather from "../Weather/Weather";
import { IoIosArrowUp } from "react-icons/io";
import AppsFooter from "../AppsFooter/AppsFooter";

// CSS
import "./HomeScreen.css";

function MainScreen({ hours, minutes, month, date, day }) {
  return (
    <div className="screen-img ">
      <div className="screen-aligne">
        <Clock
          hours={hours}
          minutes={minutes}
          day={day}
          month={month}
          date={date}
        />
        <div className="home-screen-lowerSection">
          <div>
            <Weather day={day} month={month} date={date} />
            <Apps />
          </div>
          <div>
            <Calender day={day} date={date} month={month} />
          </div>
        </div>
        <div className="arrow-conteiner">
          <IoIosArrowUp size={20} className="arrow" />
        </div>
        <AppsFooter />
      </div>
    </div>
  );
}

export default MainScreen;
