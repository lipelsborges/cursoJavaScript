const numeros = [5, 50, 80, 1 , 2, 3, 5, 8, 7, 11, 15, 22, 27];












// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 105 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 1000 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);