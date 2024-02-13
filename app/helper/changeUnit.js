export function changeUnit(unit) {
  if (unit.textContent === "°C") {
    let temperature = document.querySelector(".temperature"),
      degree = parseFloat(temperature.textContent);
    degree = (degree - 32) * (5 / 9);
    temperature.textContent = degree.toPrecision(3);
    unit.classList.toggle("inactive");
    document.querySelector(".fahrenheit").classList.add("inactive");
    console.log("Cambiar a ", unit.className);
  } else if (unit.textContent === "°F") {
    let temperature = document.querySelector(".temperature"),
      degree = parseFloat(temperature.textContent);
    degree = degree * (9 / 5) + 32;
    temperature.textContent = degree.toPrecision(4);
    unit.classList.toggle("inactive");
    document.querySelector(".celcius").classList.add("inactive");
    console.log("Cambiar a ", unit.className);
  }

  return unit;
}
