function montaEnderecoCompleto(rua, cidade, numero, cep){
    let resp = `${rua}, ${cidade}, ${numero}, ${cep}`;
    return resp;
}

let rua = 'Rua Gipse Montenegro', cidade = 'Natal', numero = 1732, cep = '59073-180', resp;

resp = montaEnderecoCompleto(rua, cidade, numero, cep);

console.log(resp);