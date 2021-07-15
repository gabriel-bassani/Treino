function soletraPalavra(word){
    var iterador = word[Symbol.iterator]();
    var itword = iterador.next();
    while(!itword.done){
        console.log(itword.value);
        itword = iterador.next();
    }
}
var word = 'testes';

soletraPalavra(word);
