function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numero() {
  const numero1 = random(0,100);
  console.log(`O número é: ${numero1}`);

  if (typeof numero1 === "number") {

    if (numero1 % 3 === 0 && numero1 % 5 === 0) {
      console.log('FizzBuzz');
    } 
    else if (numero1 % 3 === 0) {
      console.log('Fizz');
    } 
    else if (numero1 % 5 === 0) {
      console.log('Buzz');
    } 
    else {
      console.log(`Seu número não é divisível por 3 nem por 5: ${numero1}`);
    }

  } else {
    console.log('O valor gerado não é um número!');
  }
}
numero();


