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

  const temperature = Math.round(data.main?.temp - 273.15).toString();
  const [newTemp, setNewTemp] = useState([]);
  useEffect(() => {
    if (temperature.includes("-")) {
      const splitTemp = temperature.split("");
      splitTemp.splice(0, 1);
      setNewTemp([...splitTemp]);
    } else if (temperature.includes("-") === false) {
      setNewTemp(temperature);
    }
  }, [temperature]);

  const [color, setColor] = useState(true);
  window.onload = (e) => {
    if (newTemp.includes("1")) {
      setColor(!color);
    } else if (newTemp.includes("1") === false) {
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
          {temperature.includes("-") ? "-" : ""}
          {newTemp[0] === "1" && newTemp.length === 1 ? (
            <div className={!color ? "red" : "white"}>{newTemp}</div>
          ) : (
            <div>
              {newTemp.length === 2 && newTemp[0] === "1" ? (
                <div className="aligne">
                  <p className={!color ? "red" : "white"}>{newTemp[0]}</p>
                  {newTemp[1]}
                </div>
              ) : (
                <div>
                  {newTemp.length === 2 && newTemp[1] === "1" ? (
                    <div className="aligne">
                      {newTemp[0]}
                      <p className={!color ? "red" : "white"}>{newTemp[1]}</p>
                    </div>
                  ) : (
                    <div>
                      {newTemp[0] === "1" && newTemp[1] === "1" ? (
                        <div className="aligne">
                          <p className={!color ? "red" : "white"}>
                            {newTemp[0]}
                          </p>
                          {newTemp[1]}
                        </div>
                      ) : (
                        <div>{newTemp}</div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <span> &#176;</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
