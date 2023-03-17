import React, { useCallback, useEffect, useState } from "react";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import TimeRules from "../../TimeRules";
import Footer from "../Footer/Footer";
import MainScreen from "./MainScreen";

// CSS
import "./HomeScreen.css";

function HomeScreen() {
  const time = new Date();
  const timeRules = new TimeRules();
  const [hours, setHours] = useState(timeRules.addZero(time.getHours()));
  const [minutes, setMinutes] = useState(timeRules.addZero(time.getMinutes()));
  // const [seconds, setSeconds] = useState(timeRules.addZero(time.getSeconds()));
  const day = timeRules.weekDays[time.getDay()];
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
    <>
      <div className="home-screen-conteiner">
        <ScreenHeader hours={hours} minutes={minutes} />
        <div className="home-screen">
          <MainScreen
            hours={hours}
            minutes={minutes}
            month={month}
            date={date}
            day={day}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;
