function entrar() {
  let soma = 0;
  let media = 0;
  let nome = window.prompt("Qual é o nome do aluno? ");
  let nota1 = Number(window.prompt(`Primeira nota de ${nome}: `));
  let nota2 = Number(window.prompt(`Segunda nota de ${nome}: `));
  
  
  soma = nota1 + nota2;
  media = soma / 2;
  let res = document.querySelector("div#res");

  res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
  res.innerHTML += `<p>Com as notas ${nota1.toString().replace(".", ",")} e ${nota2.toString().replace(".", ",")}, a <strong>média é ${media.toString().replace(".", ",")}</strong></p>`;
  if (media >= 6) {
    res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark id="aprov"><strong>APROVADO</strong></mark></p>`;
  } else if (media > 3 && media < 6) {
    res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <mark id="recu"><strong>RECUPERAÇÃO</strong></mark></p>`;
  } else {
    res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark id="reprov"><strong>REPROVADO</strong></mark></p>`;
  }
}
