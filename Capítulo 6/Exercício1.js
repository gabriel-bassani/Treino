var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

var produtos2 = ['Arroz', 'Macarrão', 'Refrigerante'];

var produtoDesejado = 'Feijão', resp;

function possuiProduto(produtos, produtoDesejado){
    var iterador = produtos[Symbol.iterator]();
    itProduto = iterador.next();
    while(!itProduto.done){
        if(produtos.has(produtoDesejado)) return true;
        itProduto = iterador.next();
    }
    return false;
};
resp = possuiProduto(produtos, produtoDesejado);
console.log(resp);