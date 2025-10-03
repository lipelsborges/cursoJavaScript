const frutas = ['Maça', 'Pera', 'Uva']

for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Borges',
    idade: 30
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}