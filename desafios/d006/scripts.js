function convert() {
  let c = parseFloat(window.prompt("Digite uma temperatura em °C (Celsius)"));
  let k = c + 273;
  let f = 1.8 * c + 32;
  let res = document.getElementById("res");
  res.innerHTML = `<h1>A temperatura de ${c}°C, corresponde a...<\h1>`;
  res.innerHTML += `<p>${k}°K (Kelvin)<\p>`;
  res.innerHTML += `<p>${f}°F (Fahrenheit)<\p>`;
}
