//import { coors } from "../helper/geolocal.js";

export function Location() {
  const $p = document.createElement("p");
  // console.log(`Longitud: ${cordenadas.longitude}`);
  // console.log(`Más o menos ${cordenadas.acurracy} metros`);

  // const coordenadas = geolocal();
  // let position = coordenadas();

  //let data = coors;

  // console.log(`Latitud: ${coors}`);

  $p.innerHTML = `
  <h2>Mexico City, cdmx</h2>
  <a href="">Choose area</a>`;

  return $p;
}
