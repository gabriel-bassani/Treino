function todosSaoMaioresQue(referencia, ...numeros){
    return numeros.every(numero => {
        return numero > referencia;
    });
}

let resp = todosSaoMaioresQue(3,4,4,5,6,7);

console.log(resp);