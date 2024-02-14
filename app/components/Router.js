import { getGeo } from "../helper/geolocal.js";
import { CardWeather } from "./CardWeather.js";
const $h2 = document.createElement("h2"),
  $span = document.createElement("span");

export async function Router() {
  $span.classList.add("update");
  $span.textContent = "Actualizar Ubicación";
  $h2.id = "ubication-name";
  $h2.classList.add("ubication");

  if (!localStorage.getItem("latitude") && !localStorage.getItem("longitude")) {
    // console.log("Guardando infomracion en localstorage...");
    await getGeo();
  }
  let latitude = localStorage.getItem("latitude"),
    longitude = localStorage.getItem("longitude");

  if (latitude && longitude) await getUbication(latitude, longitude);
  const weather = await getWeather(latitude, longitude);
  const card = await CardWeather(weather);
  // console.log(card);
  document.getElementById("main-container").appendChild(card);
  document.getElementById("loader").style.display = "none";
}

async function getUbication(latitude, longitude) {
  try {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`
      ),
      json = await res.json(),
      address = json.features
        ? json.features[0].properties.address
        : `Sin ubicación`;

    // console.log(json);
    $h2.innerText = `📍${
      address.suburb
        ? address.suburb
        : address.village
        ? address.village
        : address.town
        ? address.town
        : address.borough
        ? address.borough
        : address.city
    }, ${address.state ? address.state : address.city}`;
    document.getElementById("ubication-section").appendChild($h2);
    document.getElementById("ubication-section").appendChild($span);
  } catch (err) {
    // console.log(err);
  }
}

async function getWeather(latitude, longitude) {
  try {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,cloud_cover,wind_speed_10m,is_day&timezone=auto`
      ),
      json = await res.json();
    // console.log(json);
    return json;
  } catch (error) {
    // console.log(error);
  }
}
