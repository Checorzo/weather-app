import { setUbication } from "../helper/observer.js";
export function Header(props) {
  const $header = document.createElement("header"),
    $section = document.createElement("section"),
    $h1 = document.createElement("h1");
  $header.id = "header";
  $section.classList.add("ubication-section");
  $section.id = "ubication-section";

  $h1.innerHTML = props.titulo;
  $header.appendChild($h1);
  $header.appendChild($section);

  return $header;
}
