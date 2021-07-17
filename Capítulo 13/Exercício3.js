function anunciaBolasSorteadas(...bolas) {
    for(var i = 0; i < bolas.length; i++) {
      console.log('A bola escolhida foi: ' + arguments[i]);
    }
  }
  
  anunciaBolasSorteadas(1,2,3);
  // saída
  // A bola escolhida foi: 1
  // A bola escolhida foi: 2
  // A bola escolhida foi: 3
  