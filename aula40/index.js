function random(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

const num1 = random(1, 100);
const num2 = random(1, 100)

let maior = Math.max(num1, num2);

console.log(`Numero 1: ${num1}`)
console.log(`Numero 2: ${num2}`)
console.log(`Maior numero: ${maior}`)



while (num1 > num2){
    console.log(num1)
    break;
} while (num1 < num2){
    console.log(num2)
}