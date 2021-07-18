function* correBolt(){
    console.log('Usain passou no Checkpoint 1');
    yield('Checkpoint 1');
    console.log('Usain passou no Checkpoint 2');
    yield('Checkpoint 2');
    console.log('Usain passou no Checkpoint 3');
    yield('Checkpoint 3');
    console.log('Usain passou no Checkpoint 4');
    yield('Checkpoint 4');
}
let parada = correBolt();
let iterador = parada.next();
while(!iterador.done){
    iterador = parada.next();
}
//for(let i of parada) i.next(); //.log(i);
//console.log(parada);
//console.log(parada.next());