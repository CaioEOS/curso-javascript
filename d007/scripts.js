let dolar = Number(
  window.prompt("Antes de mais nada. Quanto está a cotação atual do Dólar?")
);
function convert() {
  let reais = parseFloat(window.prompt("Quantos R$ você tem na carteira?"));
  let convert = reais / dolar;
  let res = document.getElementById("res");
  res.innerHTML = `<p>Seus R$ ${reais} serão convertidos em $ ${convert}</p>`;
}
