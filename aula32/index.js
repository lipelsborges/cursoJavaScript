const numero = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, TerceiroNumero, ...resto] = numero;
console.log(primeiroNumero, segundoNumero);             // const [primeiroNumero, , TerceiroNumero] para pular o indice
console.log(resto);