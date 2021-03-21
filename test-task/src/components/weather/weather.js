import { keys } from "@material-ui/core/styles/createBreakpoints";
import React, { useState } from "react";
import "./weather.css";

const api = {
  key: "04813fad06be7cb407d737ee29d61011",
  base: "https://api.openweathermap.org/data/2.5/",
};

const myLoc = `http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}&appid=${api.key}`;

console.log(api.myLoc);

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  return (
    <div className="weather">
      <div className="weather-wrapper">
        <main>
          <div className="search">
            <button>My Loc</button>
            <br />
            <input
              type="text"
              placeholder="Find the weather in the city"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              onKeyPress={search}
            />
          </div>
          {/* Если погода не запрашивалась, выводим "" */}
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
              </div>
              <div className="weather-box">
                <div className="temperature">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
      </div>
    </div>
  );
}

export default Weather;
