const r = require('readline-sync');

let nota; 

do {

    nota = parseFloat(r.question('Digite uma nota de 0 a 10: '));

    console.log("Nota inválida. Digite outra nota.");

}while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota);