let res = document.getElementById("res");
function calcular() {
  let soma = 0;
  let media = 0;
  let nome = prompt("Qual é o nome do aluno?");
  let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
  let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
  soma = n1 + n2;
  media = soma / 2;

  res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;
  res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e  ${n2}</mark>.</p>`;
  res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`;

  if (media >= 6) {
    res.innerHTML += `<p>A mensagem que temos é: <strong>Meus parabéns!</strong></p>`;
  } else {
    res.innerHTML += `<p>A mensagem que temos é: <strong>Estude um pouco mais!</strong></p>` 
  }
}
