let res = document.getElementById("res");
function maior() {
  let n1 = Number(prompt("Digite um número: "));
  let n2 = Number(prompt("Digite outro número: "));

  if (n1 > n2) {
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`
  } else {
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`
  }
}
