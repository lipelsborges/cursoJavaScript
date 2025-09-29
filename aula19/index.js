function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome =form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const peso =form.querySelector('.peso');
        const altura =form.querySelector('.altura');

        pessoas.push[{
            nome,
            sobrenome,
            peso,
            altura,
        }];
        console.log(pessoas);
    }
    resultado.innerHTML += (nome.value);
    resultado.innerHTML += (sobrenome.value);
    resultado.innerHTML += (peso.value);
    texto.innerHTML += (altura.value);
 
   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();