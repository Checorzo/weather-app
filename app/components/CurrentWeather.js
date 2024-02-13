// import {  } from "../helper/changeUnit.js";
import { isCloudy } from "../helper/cloudCover.js";

export function CurrentWeather(props) {
  const $divWeather = document.createElement("div");
  const {
    cloud_cover,
    is_day,
    precipitation,
    relative_humidity_2m,
    wind_speed_10m,
  } = props;
  $divWeather.classList.add("current-weather__weather");

  let { icon } = isCloudy(cloud_cover, is_day);

  $divWeather.innerHTML = `
  <p class="weather">
    <span class="${icon}"></span>
    <span class="temperature">${props.temperature_2m}</span>
  </p>
   <p class="units">
    <sup class="celcius">°C</sup>
    <sup class="pipe" >|</sup>
    <sup class="fahrenheit inactive">°F</sup>
  </p>
  <ul>
    <li>Precipitación: ${precipitation}% </li>
    <li>Humedad: ${relative_humidity_2m}%</li>
    <li>Viento: ${wind_speed_10m} km/h</li>
  </ul>
  `;

  return $divWeather;
}
