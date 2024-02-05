export function Header(props) {
  const $header = document.createElement("header");
  $header.innerHTML = `<h1>${props.titulo}</h1>`;

  return $header;
}
