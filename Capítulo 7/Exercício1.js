function removeDuplicatas(numeros){
    var lista = [], i;
    var numSet = new Set();
    for(i of numeros) numSet.add(i);
    for(i of numSet) lista.push(i);
    return lista;
}

numeros = [1, 2, 3, 4, 5, 2];

numeros = removeDuplicatas(numeros);

console.log('numeros:', numeros);