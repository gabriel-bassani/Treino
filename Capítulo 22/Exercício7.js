function quantidadePropriedadesEnumeraveis(obj) {
    let cont = 0;
    const propriedades = Object.getOwnPropertyDescriptors(obj);
    for(let [i,] of Object.entries(obj)) {
      if(propriedades[i].enumerable) cont++;
    }
  
    return cont;
  }
  obj = {
      nome: 'Daniel'
  }
  console.log(quantidadePropriedadesEnumeraveis(obj));
  