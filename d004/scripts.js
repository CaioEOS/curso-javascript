function troco() {
  let produto = window.prompt("Que produto você está comprando? ");
  let valor = window.prompt(`Quanto custa ${produto} que você está comprando?`);
  let pagamento = window.prompt(
    `Qaul foi o valor que você deu para pagar ${produto}`
  );
  let troco = pagamento - valor;
  window.alert(
    `Você comprou ${produto} que custou R$ ${valor},00.\nDeu R$ ${pagamento},00 em dinheiro e vai receber R$ ${troco},00 de troco.\nVolte Sempre!`
  );
}
