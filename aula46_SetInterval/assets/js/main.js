const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString ("pt-BR", {
        hour12: false,
        timeZone: "GMT"
    });
}

function Relogio(){
    timer = setInterval(function(){
        segundos ++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function(){
    clearInterval(timer);
    Relogio();
    relogio.style.color = "black";
});

pausar.addEventListener('click', function(){
    clearInterval(timer);
    relogio.style.color = "red";
    
});

zerar.addEventListener('click', function(){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = "00:00:00"
    relogio.style.color = "black";
});
