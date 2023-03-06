import React from "react";
import Clock from "../Clock/Clock";
import ScreenHeader from "../ScreenHeader/ScreenHeader";

// CSS
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-screen-conteiner">
      <div className="home-screen">
        <div className="screen-img">
          <ScreenHeader />
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
