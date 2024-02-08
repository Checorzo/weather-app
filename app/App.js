import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export default function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header({ titulo: "Weather App" }));
  Router();
  $root.appendChild(Main());
  $root.appendChild(Loader());
}
