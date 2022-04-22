import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather application</h1>
        <button className="btn btn-primary">hello</button>
      </header>
      <footer>
        <p>
          This project was coded by Katerīna Orrava and is open-sourced on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KateRiinaO/app-weather"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dapper-lokum-52cb3b.netlify.app/"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
