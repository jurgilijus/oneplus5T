import React from "react";
// import axios from "axios";

// Css
import "./Weather.css";

function Weather({ day, month, date }) {
  // const [data, setData] = useState({});
  // const url =
  //   "https://api.openweathermap.org/data/2.5/weather?lat=54.687157&lon=25.279652&appid=68e483f66271334a7dfec3073f8dec34";

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  const monthForWheather = month.slice(0, 3);

  return (
    <div className="weather-conteiner">
      <div>
        <div className="weather-date">
          <p>{day},</p>
          <p>{monthForWheather}</p>
          <p>{date}</p>
        </div>
        <p className="weather">sunny</p>
      </div>

      <div>
        <p className="temperature">
          -5 <span>&#176;</span>
        </p>
      </div>

      <p></p>
    </div>
  );
}

export default Weather;
