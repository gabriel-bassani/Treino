function tudoParaADireita(strings, tam){
    strings.forEach(str => {
        console.log(str.padStart(tam));
    });
}

strings = ['carro', 'avião', 'foguete', 'helicóptero' ];

tudoParaADireita(strings, 11);