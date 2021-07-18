class VideoGame{
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}
class PlayStaytion extends VideoGame{
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais){
        super(marca, nControles, tipoMidia);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

let PlayStaytion4 = new PlayStaytion('Sony', '2', 'dvd', 2, 220, ['Volante', 'Controle sem fio']);

console.log(PlayStaytion4);