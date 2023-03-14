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

  const changeColor = Math.round(data.main?.temp - 273.15).toString();

  const [color, setColor] = useState(true);
  window.onload = (e) => {
    if (changeColor.includes("1")) {
      setColor(!color);
    } else if (changeColor.includes("1") === false) {
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
          {changeColor.includes("-") ? "-" : ""}
          <span>
            {changeColor.includes("-") &&
            changeColor.length === 2 &&
            changeColor.includes("1") ? (
              <p className={!color ? "red" : "white"}>
                {changeColor.slice(1, 2)}
              </p>
            ) : (
              <span>
                {changeColor.includes("-") &&
                changeColor.length === 3 &&
                changeColor.slice(1, 2).includes("1") ? (
                  <div className="aligne">
                    <p className={!color ? "red" : "white"}>
                      {changeColor.slice(1, 2)}
                    </p>
                    {changeColor.slice(2, 3)}
                  </div>
                ) : (
                  <div>
                    {changeColor.slice(2, 3).includes("1") ? (
                      <div className="aligne">
                        {changeColor.slice(1, 2)}
                        <p className={!color ? "red" : "white"}>
                          {changeColor.slice(2, 3)}
                        </p>
                        {changeColor.length === 3 &&
                        changeColor.includes("1") === false ? (
                          <p>{changeColor}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <div>
                        {changeColor.length === 1 &&
                        changeColor.includes("1") ? (
                          <p className={!color ? "red" : "white"}>
                            {changeColor}
                          </p>
                        ) : (
                          <div>
                            {changeColor.length === 2 &&
                            changeColor.slice(0, 1).includes("1") ? (
                              <div className="aligne">
                                <p className={!color ? "red" : "white"}>
                                  {changeColor.slice(0, 1)}
                                </p>
                                {changeColor.slice(1, 2)}
                              </div>
                            ) : (
                              <div>
                                {changeColor.length === 2 &&
                                changeColor.slice(1, 2).includes("1") ? (
                                  <div className="aligne">
                                    {changeColor.slice(0, 1)}
                                    <p className={!color ? "red" : "white"}>
                                      {changeColor.slice(1, 2)}
                                    </p>
                                  </div>
                                ) : (
                                  <div>
                                    {changeColor.slice(0, 3).includes("-") ===
                                      true &&
                                    changeColor.slice(0, 3).includes("1") ===
                                      false ? (
                                      <p>{changeColor.slice(1, 3)}</p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </span>
            )}
            <div>
              {changeColor.includes("-") === false &&
              changeColor.includes("1") === false ? (
                <p>{changeColor}</p>
              ) : (
                ""
              )}
            </div>
          </span>
          <span> &#176;</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
