import React from "react";
import { MdOutlineSignalWifi4Bar, MdNetworkCell } from "react-icons/md";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import TimeRules from "../TimeRules";

// CSS
import "./ScreenHeader.css";

function ScreenHeader() {
  const time = new Date();
  const timeRules = new TimeRules();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     set;
  //   }, 1000);
  //   return clearTimeout(timer);
  // }, []);
  return (
    <div className="header-conteiner">
      <p className="header-text">
        {timeRules.addZero(time.getHours())}:
        {timeRules.addZero(time.getMinutes())}
      </p>
      <div className="wi-fi-aligne">
        <div className="triangles">
          <GoTriangleUp size={6} className="up" />
          <GoTriangleDown size={6} className="down" />
        </div>
        <MdOutlineSignalWifi4Bar />
        <MdNetworkCell />
        <p className="header-text battery">100%</p>
      </div>
    </div>
  );
}

export default ScreenHeader;
