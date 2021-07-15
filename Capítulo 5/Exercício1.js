function somaFaturamento(lista){
    var total = 0;
    for(var numero of lista){
        total += numero;
    }
    return total;
}
var lista = [1, 2, 3, 4, 5, 6, 7];
var soma = somaFaturamento(lista);

console.log(soma);