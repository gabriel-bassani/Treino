function soletraPalavra(word){
    iterador = word[Symbol.iterator]();
    itword = iterador.next();
    while(!itword.done){
        console.log(itword.value);
        itword = iterador.next();
    }
}
word = 'testes';

soletraPalavra(word);
