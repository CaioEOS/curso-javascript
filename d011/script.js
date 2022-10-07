function verificar() {
  let ano = window.prompt("Qual é o ano que você quer verificar?");
  let res = document.querySelector("div#res");
  res.innerHTML = `<h2>Analisando o ano de ${ano}...<h2>`;
  if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
    res.innerHTML += `<p>O ano de ${ano} <mark id="sim">É BISSEXTO</mark> &#x2705</p>`;
  } else {
    res.innerHTML += `<p>O ano de ${ano} <mark id="nao" >NÃO É BISSEXTO</mark> &#x274C</p>`;
  }
}
