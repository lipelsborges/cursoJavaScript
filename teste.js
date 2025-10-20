function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        return `Saque realizado com Sucesso: R$${this.saldo}`
    } else {
        return `Saldo Insuficiente: R$${this.saldo}`
    }
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    return `Deposito feito com sucesso: R$${this.saldo}`
};

Conta.prototype.verSaldo = function(){
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta} | Saldo: R$${this.saldo}`)
};

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;

};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const cc = new CC(11, 22, 0, 100);
cc.depositar(200);
cc.sacar(110);
cc.sacar(1);
cc.verSaldo()

console.log("//////////////////////////////////////")

const cp = new CP(12, 23, 100)
cp.verSaldo()