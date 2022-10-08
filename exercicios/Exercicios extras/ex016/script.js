function calc() {
  let res = document.getElementById("res");
  let ano = Number(prompt("Em que ano você nasceu? "));
  let agora = new Date();

  let anoatual = agora.getFullYear();
  let idade = anoatual - ano;
  res.innerHTML = `<p>Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${anoatual}</p>`;
}
