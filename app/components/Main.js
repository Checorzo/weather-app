import { Location } from "./Location.js";

export function Main() {
  const $main = document.createElement("main");

  $main.appendChild(Location());

  return $main;
}
