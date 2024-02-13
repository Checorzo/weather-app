import { isCloudy } from "../helper/cloudCover.js";
export function DateWeather(props) {
  const $divDate = document.createElement("div");
  $divDate.classList.add("current-weather__timestamp");
  const weekDays = [
    "Domigo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let { cloud_cover, is_day, time } = props;

  let { sky } = isCloudy(cloud_cover, is_day);
  // if (sky === "Sunny" && is_day === 0) sky = "Clear";

  time = new Date(time);
  let day, hour, minutes;
  weekDays.forEach((el, i) => {
    if (i === time.getDay()) day = el;
  });

  hour = time.getHours();
  if (hour > 12) hour = hour - 12;
  minutes = time.getMinutes() === 0 ? "00" : time.getMinutes();
  time = `${hour}:${minutes} PM `;
  console.log(props);
  $divDate.innerHTML = `
  <p>
    <spam>${day}</spam>
    <spam>${time}</spam>
    <spam>${sky}</spam>

  </p>`;

  return $divDate;
}
