import App from "./App.js";
import { changeUnit } from "./helper/changeUnit.js";
import { getGeo } from "./helper/geolocal.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
});
document.addEventListener("click", (e) => {
  if (e.target.matches(".update")) {
    getGeo();
    App();
  }
  if (e.target.matches(".inactive")) {
    changeUnit(e.target);
  }
});
