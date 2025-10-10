const numeros = [5, 50, 80, 1 , 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numeroDobro = numeros.map(valor => valor * 2);
console.log(numeroDobro)

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
  obj.id = (indice + 1) * 1000;
  return obj;
});

console.log(comIds);