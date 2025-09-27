let num = 55 

let numCima = Math.ceil(num)
let numBaixo = Math.floor(num)
let decimais = (num.toFixed(2))
rq = Math.sqrt(num)
let inteiro = Number.isInteger(num)
let nan = Number.isNaN(num)

document.body.innerHTML += `Seu numero é: ${num}<br />`;
document.body.innerHTML += `${num} é inteiro: ${inteiro}<br />`;
document.body.innerHTML += `É NaN: ${nan}<br />`;
document.body.innerHTML += `Raiz quadrada: ${rq}<br />`;
document.body.innerHTML+= `Arredondando pra baixo ${numBaixo}<br />`;
document.body.innerHTML += `Arredondando pra cima: ${numCima}<br />`;
document.body.innerHTML += `Com duas casas decimais: ${decimais}<br />`;
document.body.innerHTML += `Seu numero é: ${num}<br />`;




