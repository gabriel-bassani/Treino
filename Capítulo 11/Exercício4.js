/*let objeto = {
    idade: 0,
    criaObjetoComCaracteristicas(caracteristicas){

    }
}*/
function criaObjetoComCaracteristicas(caracteristicas){
    let objeto = {};
    for(let i of caracteristicas.keys()){
        objeto[i] = caracteristicas.get(i);
    }
    return objeto;
}
let mapa = new Map();
mapa.set('idade', 25);
let objeto;

objeto = criaObjetoComCaracteristicas(mapa);
console.log(objeto);