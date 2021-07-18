function* testeDeGeradores() {
    console.log('passei aqui!');
    yield 'fim do método';
}

let next = testeDeGeradores();
next.next();
//console.log(next);