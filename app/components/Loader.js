export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "app/assets/loader.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");
  $loader.id = "loader";
  return $loader;
}
