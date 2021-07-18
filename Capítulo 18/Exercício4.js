var pokemons = ['Pikachu', 'Charmander', 'Caterpie'];
function* logPokemons(pokemons){
    console.log('Capturou o ' + pokemons[0] + '!');
    yield('Pokemon 1');
    console.log('Capturou o ' + pokemons[1] + '!');
    yield('Pokemon 2');
    console.log('Capturou o ' + pokemons[2] + '!');
    yield('Pokemon 3');
}
/*
for(var index = 0; index < pokemons.length; index++) {
	var pokemon = pokemons[index];
	console.log('Capturou o ' + pokemon + '!');
}
*/
let poke = logPokemons(pokemons);
let iterador = poke.next();
while(!iterador.done) iterador = poke.next();