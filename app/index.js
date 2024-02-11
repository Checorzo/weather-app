import App from "./App.js";
import { getGeo } from "./helper/geolocal.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
});
document.addEventListener("click", (e) => {
  if (!e.target.matches(".update")) return;
  getGeo();
  App();
});
