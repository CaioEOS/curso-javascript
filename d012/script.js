function verificar() {
  let precoantes = Number(
    window.prompt("Qual era o preço anterior do produto? ")
  );
  let precoatual = Number(window.prompt("Qual é o preço atual do produto? "));
  let diferenca = Number(0);
  let porc = Number(0);
  let res = document.querySelector("res")
  res.innerHTML = `<h2>Analisando os valores informados</h2>`;
  res.innerHTML += `<p>O produto custava R$ ${precoantes.toFixed(
    2
  )} e agora custa R$ ${precoatual.toFixed(2)}.</p>`;
  if (precoantes < precoatual) {
    diferenca = precoatual - precoantes;
    porc = (precoatual * 100) / precoantes - 100;

    res.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
    res.innerHTML += `<p>O preço subiu R$ ${diferenca} em relação ao preço anterior </p>`;
    res.innerHTML += `<p>Uma variação de ${porc.toFixed(1)}% a mais</p>`;
  } else if (precoantes > precoatual) {
    diferenca = precoantes - precoatual;
    porc = (precoantes * 100) / precoatual - 100;

    res.innerHTML += `<p>Hoje o produto está mais barato. </p>`;
    res.innerHTML += `<p>O preço diminuiu R$ ${diferenca} em relação ao preço anterior </p>`;
    res.innerHTML += `<p>Uma variação de ${porc.toFixed(2)}% a menos</p>`;
  } else res.innerHTML += `<p>O produto continua com o mesmo preço. </p>`;
}
