function mapeiaObjeto(obj){
    const mapa = new Map(Object.entries(obj));
    //console.log(mapa.keys());
    //console.log(mapa.values());
    return mapa;
}
obj = {
    nome: 'Gabriel'
}
const mapa = mapeiaObjeto(obj);
//console.log(mapa);
console.log(mapa.get('nome'));