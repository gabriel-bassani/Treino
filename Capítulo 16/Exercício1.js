class VideoGame{
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}

let Xbox = new VideoGame('Microsoft', '2', 'Console');

console.log(Xbox);