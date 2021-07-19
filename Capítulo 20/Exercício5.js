class Compras {
    constructor(itens, valorAPagar, valorPago) {
      this.itens = itens;
      this.valorAPagar = valorAPagar;
      this.valorPago = valorPago;
    }
}
  
const proxy = new Proxy(Compras, {
    set(obj, prop, val){
        let valorPago = prop.valorPago, valorAPagar = prop.valorAPagar;
        if(valorPago > valorAPagar) return obj[prop];
        else console.log('Valor insuficiente para pagar!');
    }
})

let compras = new Compras(4, 200, 100);

//compras.itens = 4;
proxy.itens = 4;
proxy.valorAPagar = 200;
proxy.valorPago = 100;
