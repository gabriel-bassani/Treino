/*Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.*/

console.log('Resposta original:\n');

var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar

console.log('\nMinha resposta:\n');

var numeros = [0, 1, 2, 3, 4, 5];
numeros.forEach(function(number){
    if(number % 2 === 0) console.log(number + ' é par');
    else console.log(number + ' é ímpar');
});