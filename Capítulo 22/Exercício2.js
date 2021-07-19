function detalhaObjeto(pbj){
    for(let [i, j] of Object.entries(obj)){
        console.log(`${i}: ${j}`);
    }
}

const obj = {
    nome: 'Ariel',
    idade: 23,
    genero: 'Feminino',
    tipoSanguinio: 'A'
}

detalhaObjeto(obj);