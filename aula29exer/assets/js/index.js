
const data = new Date();
const diaSemana = data.getDay();
const day = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const texto = document.querySelector(".texto");


function diaMesTexto(mes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses [mes];
}

//----------------------------------------------------------------------------------------------------------------------------------------------

function diaSemanaTexto (diaSemana) {
    const dia = ['Domingo','Segunda', 'Terça', 'Quarta','Quinta', 'Sexta', 'Sabado'];
    return dia[diaSemana];  
}
//--------------------------------------------------------------------------------------------------------------------------------------

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;

}

//----------------------------------------------------------------------------------------------------------------------------

function formataData(data){
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    return `${hora}:${min}`;
}


texto.innerHTML = (`Hoje é ${diaSemanaTexto(diaSemana)}, ${day} de ${diaMesTexto(mes)} de ${ano}, ${formataData(data)}`)

 