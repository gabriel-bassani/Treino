function contaQuantidadeVogaisNaoAcentuadas(...palavras){
    let numero = 0;
    for(let palavra of palavras){
        let lowerPalavra = palavra.toLowerCase();
        //console.log(lowerPalavra);
        let letras = [...lowerPalavra];
        //console.log(letra);
        for(letra of letras){
            if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') numero++;;
        }
    }
    return numero;
}
let resp = contaQuantidadeVogaisNaoAcentuadas('palavra', 'Gabriel', 'TesTe', 'Poxa', 'ola');

console.log(resp);