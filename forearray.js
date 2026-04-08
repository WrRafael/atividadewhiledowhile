//npm install readline-sync

/* let contador=0;
let numero;
const r = require('readline-sync');
while (contador <= 10){
    numero = parseFloat(r.question('Qual tabuada voce deseja saber ? '));
        if (numero >= 0 && numero <= 10) {
            for (contador = 0; contador <= 10; contador++) {
                resul = numero * contador;
            console.log(numero + " x " + contador  + " = " + resul);
            }
        }
    else {
        console.log("Número inválido. Você deve digitar um número entre 0 e 10."); 
    }   
} */ 

/* let frutas = ["banana", "maçã", "laranja", "uva", "abacaxi"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

let notas = [7,8,9,10,6,12,16,18,20];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log("A soma das notas é: " + soma);