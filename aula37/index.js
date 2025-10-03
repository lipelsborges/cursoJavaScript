const nomes =  ['Felipe','Philipi','Rogerio']

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Borges',
    idade: 30
};


for (let chave in pessoa){   //objeto
    console.log(chave, pessoa[chave])
}

nomes.forEach(function(valor, indice, array){  /// pega tudo
    console.log(valor, indice, array)
});

for (let i in nomes){ // pega valor e indice
    console.log(i, nomes[i])
}

for (let i of nomes){              // pega so o valor
    console.log(i, nomes[i])
}

//for classico - geralmente com iteraveis (array ou strings)
// for in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)