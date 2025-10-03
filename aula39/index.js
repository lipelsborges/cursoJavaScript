//let i = 0;
//const nome = 'Felipe'

//while (i <= 10 ){
//   console.log(i);
// i++;
//} 


//while (i < nome.length){
//    console.log(nome);
 //   i++;
//}


function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = 10 testar doWhile
let rand = random(min, max)

while (rand !== 10){
    reand = random(min, max);
    console.log(rand);
}

console.log('###')

do{
    rand = random(min, max);
    console.lod(rand);
}while (rand !== 10);


// doWhile = executa pelo menos 1 vez sendo falso
// while = nn executa sendo falso
