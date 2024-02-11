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
  let { time } = props;

  time = new Date(time);
  let day, hour, minutes;
  weekDays.forEach((el, i) => {
    if (i === time.getDay()) day = el;
  });

  hour = `${time.getHours() - 12}`;
  minutes = time.getMinutes() === 0 ? "00" : time.getMinutes();
  time = `${hour}:${minutes} PM `;
  console.log(props);
  $divDate.innerHTML = `
  <p>
    <spam>${day}</spam>
    <spam>${time}</spam>
  </p>`;

  return $divDate;
}
