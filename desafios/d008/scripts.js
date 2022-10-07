function desc() {
  let prod = window.prompt("Qual é o produto que você está comprando?");
  let preco = Number(window.prompt(`Qual é o preço de ${prod}`));
  let desc = (10 * preco) / 100;
  let total = preco - desc;
  let res = document.getElementById("res");
  res.innerHTML = `<h1>Calculando desconto de 10% para ${prod}</h1>`;
  res.innerHTML += `<p>O preço original era R$ ${preco}.</p>`;
  res.innerHTML += `<p>Você acaba de ganhar R$ ${desc} de desconto (-10%)</p>`;
  res.innerHTML += `<p>No fim, você vai pagar R$ ${total} no produto ${prod}</p>`;
}
