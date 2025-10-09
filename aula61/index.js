function* geradora1() {
  // Código qualquer ...
  yield 'Valor 1';
  yield 'Valor 2';
  // Código qualquer ...
  yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);



