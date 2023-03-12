import React, { useEffect, useState } from "react";
import axios from "axios";

// Css
import "./Weather.css";

function Weather({ day, month, date }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=54.687157&lon=25.279652&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;
    const api = axios.create({
      baseURL: url,
    });
    api.get("/").then((res) => {
      setData(res.data);
    });
  }, []);
  const monthForWheather = month.slice(0, 3);

  const changeColor = Math.round(data.main?.temp - 273.15);
  const [color, setColor] = useState(true);
  window.onload = (e) => {
    if (changeColor.toString().slice(1, 2) === "1") {
      setColor(!color);
    } else if (changeColor.toString().slice(1, 2) !== "1") {
      setColor(color);
    }
  };

  return (
    <div className="weather-conteiner">
      <div>
        <div className="weather-date">
          <p>{day},</p>
          <p>{monthForWheather}</p>
          <p>{date}</p>
        </div>
        <p className="weather">{data.weather?.[0].main}</p>
      </div>

      <div>
        <div className="temperature">
          {Math.round(data.main?.temp - 273.15)
            .toString()
            .includes("-")
            ? "-"
            : ""}
          <span className={!color ? "red" : "white"}>
            {Math.round(data.main?.temp - 273.15)
              .toString()
              .slice(1, 2)}
          </span>
          <span> &#176;</span>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default Weather;
