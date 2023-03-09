import React from "react";
import { BsFacebook } from "react-icons/bs";
import playStore from "../../Assets/playStore.png";
import google from "../../Assets/google.png";
import maps from "../../Assets/maps.png";
import gmail from "../../Assets/gmail.png";
import chrome from "../../Assets/chrome.png";

// CSS
import "./Apps.css";

function Apps() {
  return (
    <div className="apps-conteiner">
      <div></div>
      <div className="app-name">
        <BsFacebook size={35} className="facebook" /> facebook
      </div>
      <div className="app-name">
        <div className="app-group-aligne">
          <div className="app-backround google">
            <img src={google} alt="google" className="app" />
          </div>
          <div className="app-backround google-chrome">
            <img src={chrome} alt="chrome" className="app" />
          </div>
          <div className="app-backround gmail">
            <img src={gmail} alt="gmail" className="app" />
          </div>

          <div className="app-backround google-maps">
            <img src={maps} alt="maps" className="app" />
          </div>
        </div>
        <p>google</p>
      </div>
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
