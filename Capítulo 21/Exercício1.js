function possuiNumero(texto, termo) {
    return (texto.includes(termo));
  }
  
  console.log(possuiNumero('Era uma vez', 'vez')); // true
  console.log(possuiNumero('Dois mais dois é quatro', 'mais')); // true
  console.log(possuiNumero('Não há nada aqui', 'quadro')); // false
  