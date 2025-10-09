function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let IMC = peso.value / (altura.value * altura.value);

            if(peso.value == false && altura.value == false){
                resultado.innerHTML = ("Peso inválido")
            }
             else  if(altura.value == false){
                resultado.innerHTML = ("Altura inválido")
            }
            else{
                if (IMC < 18.5) {
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso)`);
                } else if (IMC >= 18.5 && IMC < 24.99) {
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Peso normal)`);
                } else if (IMC >= 25 && IMC < 29.99) {
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)`);
                }else if (IMC > 30 && IMC < 34.99){
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1)`);
                }else if (IMC >= 35 && IMC <= 39.99) {
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2)`);
                } else {
                resultado.innerHTML = (`Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3)`);
                }   
            }
    }
        

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

