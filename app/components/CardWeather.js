import { CurrentWeather } from "./CurrentWeather.js";
import { DateWeather } from "./DateWeather.js";

export async function CardWeather(props) {
  const $section = document.createElement("section"),
    currentWeather = CurrentWeather(props.current),
    dateWeather = DateWeather(props.current);
  $section.classList.add("current-weather-container");

  console.log(props);

  $section.appendChild(currentWeather);
  $section.appendChild(dateWeather);

  return $section;
}
