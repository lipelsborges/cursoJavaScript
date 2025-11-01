const pessoas = [
    {id: 3, nome: 'Luiz' },
    {id: 2, nome: 'Maria' },
    {id: 1, nome: 'Helena' },
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}
//console.log(novasPessoas.get(2));

// for(const pessoa of novasPessoas.values()){                .keys pra pegar apenas as chaves
//      console.log(pessoas);
//}

novasPessoas.delete(2);
console.log(novasPessoas)