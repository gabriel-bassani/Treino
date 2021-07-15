var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
    //...
  }
var Casa2 = [
    {metrosQuadrados: 4000},
    {altura: 3000},
    {nQuartos: 4},
    {nBanheiros: 2}
  
    //...
    ]
  
  for(var atributo in Casa) {
    console.log(atributo, Casa[atributo]);
  }
  console.log("\n\n");
  for(var atributo of Casa2) {
    console.log(atributo);
  }