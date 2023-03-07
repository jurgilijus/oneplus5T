import React, { useCallback, useEffect, useState } from "react";
import Clock from "../Clock/Clock";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import TimeRules from "../TimeRules";

// CSS
import "./HomeScreen.css";

function HomeScreen() {
  const time = new Date();
  const timeRules = new TimeRules();
  const [hours, setHours] = useState(timeRules.addZero(time.getHours()));
  const [minutes, setMinutes] = useState(timeRules.addZero(time.getMinutes()));
  // const [seconds, setSeconds] = useState(timeRules.addZero(time.getSeconds()));
  const day = timeRules.weekDays[time.getDay() - 1];
  const month = timeRules.months[time.getMonth()];
  const date = time.getDate();

  const refreshClock = useCallback(() => {
    const time = new Date();
    const timeRules = new TimeRules();
    setHours(timeRules.addZero(time.getHours()));
    setMinutes(timeRules.addZero(time.getMinutes()));
    // setSeconds(timeRules.addZero(time.getSeconds()));
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, [refreshClock]);
  return (
    <div className="home-screen-conteiner">
      <div className="home-screen">
        <div className="screen-img">
          <ScreenHeader hours={hours} minutes={minutes} />
          <Clock
            hours={hours}
            minutes={minutes}
            day={day}
            month={month}
            date={date}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
