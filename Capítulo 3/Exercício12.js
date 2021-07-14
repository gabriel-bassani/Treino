var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
  ]
var validade;
 
function existeProdutosDatados(produtos, data){
    const dataReferencia = new Date(data);
    return produtos.some(function(produto){
        return new Date(produto.dataValidade) < dataReferencia;
    });
}

validade = existeProdutosDatados(produtos, '2017-03-01');

console.log(validade);