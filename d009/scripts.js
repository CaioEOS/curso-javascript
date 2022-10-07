function sal() {
  let nome = prompt("Qual o nome do funcionário?");
  let sal = Number(prompt(`Qual é o salário de ${nome}`));
  let porc = Number(prompt(
    `O salário de ${nome} vai ser reajustado em qual porcentagem`
  ));
  let aumento = (porc * sal) / 100;
  let total = sal + aumento;
  let res = document.getElementById("res");
  res.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>`;
  res.innerHTML += `<p>O salário atual era R$ ${sal}.</p>`;
  res.innerHTML += `<p>com um aumento de ${porc}%, o salário vai aumentar R$ ${aumento} no próximo mês.</p>`;
  res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${total}.</p>`;
}
