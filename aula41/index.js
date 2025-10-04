function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function ePaisagem(){
    const altura = random(1, 50)
    const largura = random(1,50)

    console.log(`Altura: ${altura}`)
    console.log(`Largura: ${largura}`)

    if (largura >= altura) return true;
    return false;
}
console.log(ePaisagem())

/*const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem()) */