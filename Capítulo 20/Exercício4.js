class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
}
let livro = new Livro('Oathbringer', 'Brandon Sanderson');

const proxy = new Proxy(livro, {
    get(alvo, propriedade){
        console.log(`${propriedade} foi solicitada!`);
        return alvo[propriedade];
    },
    set(alvo, propriedade){
        console.log(`${propriedade} foi definida!`);
        return alvo[propriedade];
    }
});

console.log(proxy.titulo);

proxy.titulo = 'Words of Radiance';