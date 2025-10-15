/*
Object.values(pega so os valores)
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({}, produto, { material: 'porcelana' });

caneca.nome = 'Outro nome';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);

//const produto = { nome: 'Produto', preco: 1.8 };
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//const produto = { nome: 'Produto', preco: 1.8 };
//console.log(Object.entries(produto));