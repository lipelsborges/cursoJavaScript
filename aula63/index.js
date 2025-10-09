const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Unshift remove o primeiro
nomes.splice(2, 0, 'Luiz', 'Otávio');
console.log(nomes);

// nomes.splice(indice atual, delete, elem1, elem2, elem3);

// pop remove o ultimo
// const removidos = nomes.splice(-1, 1);

// shift adiciona
// const removidos = nomes.splice(0, 1);