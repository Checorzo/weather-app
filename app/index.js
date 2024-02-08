import App from "./App.js";

document.addEventListener("DOMContentLoaded", App);
document.addEventListener("click", (e) => {
  if (!e.target.matches(".update")) return;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      localStorage.setItem("latitude", pos.coords.latitude);
      localStorage.setItem("longitude", pos.coords.longitude);
    },
    (err) => {
      console.log(`Sucedio un error: ${err} al intentear obtener tu ubicación`);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 30000,
    }
  );
  App();
});
