import nome, {chave} from './src/config';
import {url as link} from './src/config';
import Telefone from './src/telefone';
import printer from './src/printer';

console.log(nome);
console.log(chave);
const tel = new Telefone('iphone', 971136132);
console.log(`numero: ${tel.numero} | modelo: ${tel.modelo}`);
console.log(link);
printer('Olá, esta é uma mensagem!');