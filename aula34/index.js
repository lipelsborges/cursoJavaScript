
//   variavel, condição, incrementar o decrementar
for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`)

}

//for (let i = 0; i <= 100; i+= 10){   // pular de 10 em 10
//    console.log(`Linha ${i}`)
//}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0? 'par' : 'impar';
    console.log(i, par)

}

const frutas = ['maça', 'pera', 'uva']

for (let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[1]);
}