function criaMultiplicador(multiplicador) {
  function multiplicacao(n) {
    return n * multiplicador;
  }

  return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));      // 4
console.log(triplica(2));     // 6
console.log(quadriplica(2));  // 8