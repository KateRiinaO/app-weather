import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feels, setFeels] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setFeels(response.data.main.feels_like);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Riga</h1>
        <ul>
          <li>Friday 09:46</li>
          <li>Sunny</li>
          <li>Feels like: {Math.round(feels)}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
              />
              <span className="temperature">{Math.round(temperature)}</span>{" "}
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity:{humidity}%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "faf90a5bc03e42145a435bf92d2bbff7";
    let city = "Riga";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return "Loading";
}
