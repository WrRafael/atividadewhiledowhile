 let resultado;
 let numero;
 const r = require('readline-sync');
 function mostrarTabuada() {
 console.log("Calculadora de Tabuada");
 numero = parseFloat(r.question('Digite a numero da tabuada que deseja '));
 if (numero >= 0 && numero <= 10) {
  for (let i = 0; i <= 10; i++) {
    resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
    else {
        console.log("Numero invalido. Você deve digitar um numero entre 0 e 10.");
    }
 }
    mostrarTabuada();