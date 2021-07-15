function percorreRuas(lista, rua){
    for(var it of lista){
        console.log(it);
        if(it === rua) break;
    }
}
var lista = ['Rua 1', 'Rua 2', 'Rua 3'], rua = 'Rua 2';
percorreRuas(lista, rua);