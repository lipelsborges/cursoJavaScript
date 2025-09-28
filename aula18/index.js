/* const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Borges',
    idade: 19
}


function criaPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade,
    };
}

const pessoal = criaPessoa('Felipe', 'Leonardo', 19);
const pessoal1 = criaPessoa('Borges', 'Leonardo', 19);
const pessoal2= criaPessoa('Luiza', 'Leonardo', 19);
console.log(pessoal.nome, pessoal2.nome)

 */


const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Borges',
    idade: 19,


    fala (){
    console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
    this.idade++;
    }
};

pessoal.fala();
pessoal.incrementaIdade();