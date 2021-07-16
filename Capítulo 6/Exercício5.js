function deletaAmigos(amigos, exAmigos){
    for(var i of exAmigos){
        if(amigos.get(i)){
            amigos.delete(i);
            console.log(i, 'foi deletado');
        }
        else console.log(i, 'não é seu amigo');
    }
}

var exAmigos = ['Julio Marinho', 'Luisa Pimenta'];
var amigos = new Map();
amigos.set('João Silva', {idade: 23, sexo: 'masculino'});
amigos.set('Luisa Pimenta', {idade: 18, sexo: 'feminino'});
amigos.set('Julio Marinho', {idade: 52, sexo: 'masculino'});
amigos.set('Marcela Mel', {idade: 27, sexo: 'feminino'});

deletaAmigos(amigos, exAmigos);