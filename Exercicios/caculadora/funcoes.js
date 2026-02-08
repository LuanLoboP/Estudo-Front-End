const input = document.getElementById("inputDisplay");
let operacao = "";
let numero1 = 0;

function atualizaOperacao(op) {
  operacao = op;
  numero1 = parseInt(input.value); // Tem que ter float também, ajustar depois ok ?
  input.value = "0";
}

function resultado() {
  let numero2 = parseInt(input.value);
  let numero3 = 0;

  switch (operacao) {
    case "+":
      numero3 = numero1 + numero2;
      break;
    case "-":
      numero3 = numero1 - numero2;
      break;
    case "*":
      numero3 = numero1 * numero2;
      break;
    case "/":
      numero3 = numero1 / numero2;
      break;
  }
  input.value = numero3;
}

function atualizarDisplay(numero) {
  if (input.value == "0") input.value = numero;
  else input.value = input.value + numero;
}

function limpar() {
  input.value = "0";
}
