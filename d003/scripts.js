function acao() {
  let n1 = Number(window.prompt("Digite um número inteiro qualquer: "));
  window.alert(
    `Antes de ${n1}, temos o número ${
      n1 - 1
    }. \n Depois de ${n1}, temos o número ${n1 + 1}.`
  );
}
