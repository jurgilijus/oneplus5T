import React from "react";
import { MdOutlineSignalWifi4Bar, MdNetworkCell } from "react-icons/md";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

// CSS
import "./ScreenHeader.css";

function ScreenHeader({ hours, minutes }) {
  return (
    <div className="header-conteiner">
      <p className="header-text">
        {hours}:{minutes}
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
