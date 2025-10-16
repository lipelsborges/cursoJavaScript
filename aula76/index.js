function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

  Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque){
Produto.call(this, nome, preco);
this.material = material;

    Object.defineProperty(this, 'estoque', {
    enumerable:true,
    get: function() {
        return estoque;
    },
    set: function(valor) {
        estoque = valor;
    }
});
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Flamengo', 10, 'porcelana', 10);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(camiseta);
caneca.aumento(10)
console.log(caneca)