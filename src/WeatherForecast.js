import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div classame="row">
          <div classsName="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div classsName="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div classsName="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div classsName="co-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div classsName="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "faf90a5bc03e42145a435bf92d2bbff7";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
