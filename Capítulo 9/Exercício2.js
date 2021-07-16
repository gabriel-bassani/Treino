function criaMacaroca(lista){
    let resp = '';
    for(let i of lista){
        resp = `${resp+i}`;
    }
    return resp;
}

let lista = ['a', 'b', 'c', 'd'];

lista = criaMacaroca(lista);

console.log(lista);