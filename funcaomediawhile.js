let soma=0;
let nota;
let contador = 1;
    
const r = require('readline-sync');
function mostrarMedia(){

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
console.log("A média das notas é: " + media);
}

mostrarMedia();