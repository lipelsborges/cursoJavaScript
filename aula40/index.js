function random(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

let num1 = random(1, 100);
let num2 = random(1, 100)

while(num1 === num2){
    num2 = random(1,100)
}

let maior = Math.max(num1, num2);
let menor = Math.min(num1, num2);



console.log(`Numero 1: ${num1}`)
console.log(`Numero 2: ${num2}`)
console.log(`Maior numero: ${maior}`)

console.log('###########')

console.log(`Maior numero: ${maior}`)
console.log(`Menor numero: ${menor}`)


