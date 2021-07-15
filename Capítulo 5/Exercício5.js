function percorreRuas(lista, rua){
    for(var it of lista){
        if(it === rua) continue;
        
        console.log(it);
    }
}
var ruas = ['Rua 1', 'Rua 2', 'Rua 3'], ruaPerigosa = 'Rua 2';
percorreRuas(ruas, ruaPerigosa);