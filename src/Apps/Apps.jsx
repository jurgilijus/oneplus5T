import React from "react";
import { BsFacebook } from "react-icons/bs";
import playStore from "../Assets/playStore.png";

// CSS
import "./Apps.css";

function Apps() {
  return (
    <div className="apps-conteiner">
      <div></div>
      <p className="app-name">
        <BsFacebook size={35} className="facebook" /> facebook
      </p>
      <p className="app-name">
        <BsFacebook size={35} className="facebook" /> facebook
      </p>
      <div className="app-name">
        <div className="background">
          <img src={playStore} alt="playStoreLogo" className="play-store" />
        </div>
        Play Store
      </div>
    </div>
  );
}

export default Apps;
