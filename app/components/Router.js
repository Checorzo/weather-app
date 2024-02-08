import { Header } from "./Header.js";

const $h2 = document.createElement("h2"),
  $spam = document.createElement("spam");
export async function Router() {
  $spam.classList.add("update");
  $spam.textContent = "Actualizar Ubicacinon";
  $h2.id = "ubication-name";
  $h2.classList.add("ubication");
  // if (!navigator.geolocation) {
  //   document.getElementById(
  //     "ubication-section"
  //   ).innerHTML = `<h2>Su navegador no soporta geolocalización</h2>`;
  //   return;
  // }
  if (!localStorage.getItem("latitude") && !localStorage.getItem("longitude")) {
    console.log("Guardando infomracion en localstorage...");
    const { latitude, longitude } = await getData();
    // console.log(latitude, longitude);
    localStorage.setItem("latitude", await latitude);
    localStorage.setItem("longitude", await longitude);
  }
  let latitude = localStorage.getItem("latitude"),
    longitude = localStorage.getItem("longitude");

  if (latitude && longitude) await getUbication(latitude, longitude);
}

const geo = new Promise((resuelve, error) => {
  navigator.geolocation.getCurrentPosition(resuelve, error, {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 2000,
  });
});

async function getUbication(latitude, longitude) {
  try {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`
      ),
      json = await res.json(),
      { city, suburb } = json.features
        ? json.features[0].properties.address
        : { city: "desconocido", suburb: "desconicido" };
    $h2.innerText = `${city}, ${suburb}`;
    document.getElementById("ubication-section").appendChild($h2);
    document.getElementById("ubication-section").appendChild($spam);

    // console.log(`ciudad: ${city}, Alcaldia: ${suburb}`);
  } catch (err) {
    console.log(err);
  }
}

async function getData() {
  try {
    const pos = await geo;
    // console.log(coords);
    if (!pos) throw new Error(pos);
    else return pos.coords;

    return coords ? coords : null;
  } catch (error) {
    console.log(error);
  }
}
