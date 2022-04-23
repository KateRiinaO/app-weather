import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-tempMax">
        {Math.round(props.data.temp.max)}°
      </div>
      <div className="WeatherForecast-tempMin">
        {" "}
        {Math.round(props.data.temp.min)}°
      </div>
    </div>
  );
}
