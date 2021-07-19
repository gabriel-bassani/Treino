class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
}
let livro = new Livro('Oathbringer', 'Brandon Sanderson');
//console.log(livro);
const proxy = new Proxy(livro, {
    get(alvo, propriedade){
        console.log(`${propriedade} foi solicitada!`);
        return alvo[propriedade];
    }
});

console.log(proxy.titulo);

