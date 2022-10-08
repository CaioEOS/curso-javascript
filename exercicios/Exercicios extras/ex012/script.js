let res = document.getElementById("res");
function parimp() {
  let n1 = Number(prompt("Digite um número: "));

  if (n1 % 2 == 0) {
    res.innerHTML = `<p>O número ${n1} que foi digitado é <strong>PAR!</strong></p>`;
  } else {
    res.innerHTML = `<p>O número ${n1} que foi digitado é <strong>ÍMPAR!</strong></p>`;
  }
}
