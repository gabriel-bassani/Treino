var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];

  function calculaDistancia(ruas) {
    var iterador = ruas[Symbol.iterator]();
    var distanciaTotal = 0;
    var iteradorTam = iterador.next();
    while(!iteradorTam.done){
      distanciaTotal += iteradorTam.value.tamanho;
      iteradorTam = iterador.next();
    }
  
    return distanciaTotal;
  }

  var distancia;
  distancia = calculaDistancia(ruas);

  console.log(distancia);