const pessoa = {
    nome: 'Felipe',
    sobrenome:'Borges',
    idade:'19',
    endereco:{
        rua:'Av.Brasil',
        numero:'320'
    }
};

const {nome = '', sobrenome} = pessoa;
console.log(nome, sobrenome);