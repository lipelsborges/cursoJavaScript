function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function (evento){
        evento
        alert(1);
        console.log("foi enviado.")

    };
}
meuEscopo();