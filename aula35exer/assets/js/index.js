const texto1 = document.querySelector(".frase1");
const texto2 = document.querySelector(".frase2")
const texto3 = document.querySelector(".frase3")
const texto4 = document.querySelector(".frase4")
const elementos =[
    {texto:'Frase 1'},
    {texto:'Frase 2'},
    {texto:'Frase 3'},
    {texto:'Frase 4'},
];

function Frase1(){
    
    texto1.textContent = elementos[0].texto;
    

}
function Frase2(){

    texto2.textContent = elementos[1].texto;
   

}
function Frase3(){

    texto3.textContent = elementos[2].texto;
   
}
function Frase4(){

    texto4.textContent = elementos[3].texto;
    
}

Frase1();
Frase2();
Frase3();
Frase4();

