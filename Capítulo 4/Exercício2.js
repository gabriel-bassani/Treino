var vazio, numbers = [1, 2, 3, 4, 5];

function isListaVazia(numbers){
    var i = 0;
    var iterador = numbers[Symbol.iterator]();
    var number = iterador.next();
    while(!number.done){
        i++;
        number = iterador.next();
    }
    if(i > 0) return false;
    else return true;
};
vazio = isListaVazia(numbers);

console.log(vazio);