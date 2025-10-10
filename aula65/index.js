const numeros = [5, 50, 80, 1 , 2, 3, 5, 8, 7, 11, 15, 22, 27]

function maior(){
    const array = [];
    for(let i of numeros){
        if(i > 10){
            array.push(i);
        }
    }
    return array
}

//console.log(maior())

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
//               0  1   2   3  4 .....
//const numerosFiltrados = numeros.filter(valor => valor > 50);
//console.log(numerosFiltrados);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(pessoasFiltradas);


const idadeFiltrada = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(idadeFiltrada);

const pessoaTerminaA = pessoas.filter(pessoa => pessoa.nome.endsWith('a'));
console.log(pessoaTerminaA);