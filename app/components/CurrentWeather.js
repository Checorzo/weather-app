export function CurrentWeather(props) {
  const $divWeather = document.createElement("div");
  const { is_day, precipitation, relative_humidity_2m, wind_speed_10m } = props;
  $divWeather.classList.add("current-weather__weather");

  $divWeather.innerHTML = `
  <p>
          <span>${is_day === 1 ? "🌞" : "🌕"}</span>
          <span>${props.temperature_2m}</span>
          <sup class="active">°C</sup>
          <sup>|</sup>
          <sup>°F</sup>
        </p>
        <ul>
          <li>Precipitation: ${precipitation}% </li>
          <li>Humidity: ${relative_humidity_2m}%</li>
          <li>Wind: ${wind_speed_10m} km/h</li>
        </ul>
  `;

  return $divWeather;
}
