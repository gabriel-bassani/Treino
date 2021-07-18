const contatos = [
    {
      nome: 'Mario Antonio',
      numero: '1234-5678'
    },
    {
      nome: 'Reinalda Silva',
      numero: '1234-6789'
    },
    {
      nome: 'Bárbara Lopes',
      numero: '1234-5567'
    }
  ];
  
const [,Reinalda] = contatos;
function printNumero({numero}){
    console.log(numero);
}
printNumero(Reinalda);
function printNome({nome}){
    console.log(nome);
}
printNome(Reinalda);
function printTudo(contato){
    console.log(contato);
}
printTudo(Reinalda);