class Computador {
    // Propriedades privadas
    #gpu;
    #cpu;
    #ram;
    constructor(gpu, cpu, ram){
        this.#gpu = gpu;
        this.#cpu = cpu;
        this.#ram = ram;
    }
}

let pc1 = new Computador('I5-8400', 'GTX1050ti', 16);

console.log(pc1);


/* Declaração anônima
const Computador = class {
  // conteúdo da classe
}
*/