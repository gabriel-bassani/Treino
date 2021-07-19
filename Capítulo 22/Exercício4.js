function somenteValores(obj){
    for(let i of Object.values(obj)) console.log(i);
}

const obj = {
    nome: 'Ariel',
    idade: 23,
    genero: 'Feminino',
    tipoSanguinio: 'A'
}

somenteValores(obj);