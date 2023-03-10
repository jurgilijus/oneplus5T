import React, { useCallback, useEffect, useState } from "react";
import Apps from "../Apps/Apps";
import Calender from "../Calender/Calender";
import Clock from "../Clock/Clock";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import TimeRules from "../../TimeRules";
import Weather from "../Weather/Weather";
import { IoIosArrowUp } from "react-icons/io";
import AppsFooter from "../AppsFooter/AppsFooter";
import Footer from "../Footer/Footer";
import Screen2 from "../../Screen2/Screen2";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "./HomeScreen.css";
import "swiper/css";

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
      <ScreenHeader hours={hours} minutes={minutes} />
      <Swiper
        centeredSlides={true}
        centeredSlidesBounds={true}
        initialSlide={1}
        direction="horizontal"
        className="home-screen"
      >
        <SwiperSlide>
          <Screen2 />
        </SwiperSlide>
        <SwiperSlide className="screen-img ">
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
                <Calender day={day} date={date} />
              </div>
            </div>
            <div className="arrow-conteiner">
              <IoIosArrowUp size={20} className="arrow" />
            </div>
            <AppsFooter />
            <Footer />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Screen2 />
        </SwiperSlide>
      </Swiper>
      <Swiper direction="vertical">
        <SwiperSlide>
          <Screen2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeScreen;