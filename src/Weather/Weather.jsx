import React, { useEffect, useState } from "react";
import axios from "axios";

// Css
import "./Weather.css";

function Weather({ day, month, date }) {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=54.68&lon=25.27&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;

  useEffect(() => {
    const api = axios.create({
      baseURL: url,
    });
    api.get("/").then((res) => {
      setData(res.data);
    });
  }, []);
  const monthForWheather = month.slice(0, 3);
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
        <p className="temperature">
          {Math.round(data.main?.temp - 273.15)} <span>&#176;</span>
        </p>
      </div>

      <p></p>
    </div>
  );
}

export default Weather;
