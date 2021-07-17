const pessoa = {
    nome: 'Goku',
    equipe: 'Guerreiro Z',
    seApresentar(){
        console.log(`Oi, eu sou o ${this.nome}!`);
    }
  }
  /*
  function seApresentar(pessoa) {
    console.log('Oi, eu sou o ' + pessoa.nome + '!');
  }*/
  
  pessoa.seApresentar(); // Oi, eu sou o Goku!
  