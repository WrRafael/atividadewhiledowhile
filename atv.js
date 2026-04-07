/* const r = require('readline-sync');

let nota; 

do {

    nota = parseFloat(r.question('Digite uma nota de 0 a 10: '));

    console.log("Nota inválida. Digite outra nota.");

}while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota); */

/* const r = require('readline-sync');

let soma=0;
let nota;
let contador = 1;

while (contador <= 5){
    nota = parseFloat(r.question('Digite a nota ' + contador + ': '));
    if (nota >= 0 && nota <= 10) {
    soma += nota;
    contador++;    
    }else {
        console.log("Nota inválida. Digite outra nota.");
    }
}
let media = soma / 5;
console.log("A soma das notas é: " + soma);
console.log("A média das notas é: " + media); */

const r = require('readline-sync');
let soma=0;
let nota;
let contador = 1;

do {
    nota = parseFloat(r.question('Digite a nota ' + contador + ': '));
    if (nota >= 0 && nota <= 10) {
    soma += nota;
    contador++;    
    }else {
        console.log("Nota inválida. Digite outra nota.");
    }

}while(contador <= 5);
let media = soma / 5;
console.log("A soma das notas é: " + soma);
console.log("A média das notas é: " + media.toFixed(2));