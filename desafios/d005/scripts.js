function convert() {
  let m = parseFloat(window.prompt("Digite uma distância em metros (m)"));
  let dam = m / 10;
  let hm = dam / 10;
  let km = hm / 10;
  let dm = m * 10;
  let cm = dm * 10;
  let mm = cm * 10;

  let res = document.getElementById("res");
  res.innerHTML = `<h1>A distância de ${m} metros, corresponde a...</h1>`;
  res.innerHTML += `<p>${km} quilômetros (Km)<\p>`;
  res.innerHTML += `<p>${hm} hectômetros (Hm)<\p>`;
  res.innerHTML += `<p>${dam} decâmetros (Dam)<\p>`;
  res.innerHTML += `<p>${dm} decímetros (dm)<\p>`;
  res.innerHTML += `<p>${cm} centímetros (cm)<\p>`;
  res.innerHTML += `<p>${mm} milímetros (mm)<\p>`;
}
