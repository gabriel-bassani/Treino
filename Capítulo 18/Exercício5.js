const equipe = {
    gerente: 'Gilberto',
    estagiario: 'Fernanda',
    senior: 'Paulo',
    pleno: 'Camila',
    junior: 'Adão',
    [Symbol.iterator]: function* (){
        yield this.gerente;
        yield this.estagiario;
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
  }
  

  for(let i of equipe){
      console.log(i);
  }