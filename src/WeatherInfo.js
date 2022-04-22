import React from "react";
import FormatedDate from "./FormtedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Feels like: {Math.round(props.data.feels)}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
