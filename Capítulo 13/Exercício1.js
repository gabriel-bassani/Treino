function calculaPrecoTotal(...precos) {
    //let precos = [a,b,c,d,e];
    return precos.reduce((total, preco) => {
      return total + preco;
    }, 0)
  }
  
let total = calculaPrecoTotal(1,2,3,4,5); // 15
  
console.log(total);