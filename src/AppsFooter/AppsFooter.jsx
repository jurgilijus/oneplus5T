import React from "react";
import phone from "../Assets/phone.png";
import messanger from "../Assets/messanger.png";
import chrome from "../Assets/chrome.png";
import photo from "../Assets/photo.png";
import googlePhotos from "../Assets/googlePhotos.png";

// CSS
import "./AppsFooter.css";

function AppsFooter() {
  return (
    <div className="appsfooter-conteiner">
      <img src={phone} alt="phone" className="phone" />
      <div className="messanger-conteiner">
        <img src={messanger} alt="messanger" className="messanger" />
      </div>
      <div className="messanger-conteiner">
        <img src={chrome} alt="chrome" className="chrome" />
      </div>
      <img src={photo} alt="chrome" className="chrome" />
      <img src={googlePhotos} alt="chrome" className="chrome" />
    </div>
  );
}

export default AppsFooter;
