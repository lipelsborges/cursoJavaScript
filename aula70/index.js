const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 2;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
