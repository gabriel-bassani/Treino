function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes){
    var i, j, total = 0;
    for(i of fretes.keys()){
        if(i == cidade) total = fretes.get(cidade);
    }
    //console.log(total);
    for(j of produtos){
        for(i of caixa.keys()){
            if(i == j){
                total += caixa.get(j);
            }
        }
    }
    return total;
}
var caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);
var produtos = ['Arroz', 'Macarrão', 'Refrigerante'], total;
var fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);
var cidade = 'Rio de Janeiro';
total = calculaValorTotalDaCompra(produtos, cidade, caixa, fretes);

console.log(total.toFixed(2));