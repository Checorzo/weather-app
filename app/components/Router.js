import { getGeo } from "../helper/geolocal.js";
import { CardWeather } from "./CardWeather.js";
import { Main } from "./Main.js";

const $h2 = document.createElement("h2"),
  $span = document.createElement("span");

export async function Router() {
  $span.classList.add("update");
  $span.textContent = "Actualizar Ubicacinon";
  $h2.id = "ubication-name";
  $h2.classList.add("ubication");

  if (!localStorage.getItem("latitude") && !localStorage.getItem("longitude")) {
    console.log("Guardando infomracion en localstorage...");
    await getGeo();
  }
  let latitude = localStorage.getItem("latitude"),
    longitude = localStorage.getItem("longitude");

  if (latitude && longitude) await getUbication(latitude, longitude);
  const weather = await getWeather(latitude, longitude);
  const card = await CardWeather(weather);
  console.log(card);
  document.getElementById("main-container").appendChild(card);
}

async function getUbication(latitude, longitude) {
  try {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`
      ),
      json = await res.json(),
      { city, suburb } = json.features
        ? json.features[0].properties.address
        : { city: "desconocido", suburb: "desconicido" };
    $h2.innerText = `${suburb}, ${city}`;
    document.getElementById("ubication-section").appendChild($h2);
    document.getElementById("ubication-section").appendChild($span);

    // console.log(`ciudad: ${city}, Alcaldia: ${suburb}`);
  } catch (err) {
    console.log(err);
  }
}

async function getWeather(latitude, longitude) {
  try {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,cloud_cover,wind_speed_10m,is_day&timezone=auto`
      ),
      json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
// &hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,is_day,cloud_cover,precipitation_probability&forecast_days=7
