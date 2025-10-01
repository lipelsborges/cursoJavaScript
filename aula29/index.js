const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();


function diaSemanaTexto (diaSemana) {
  const dia = ['Domingo','Segunda', 'Terça', 'Quarta','Quinta', 'Sexta', 'Sabado'];

    if (diaSemana === 6) return dia[6];
    if (diaSemana === 5) return dia[5];
    if (diaSemana === 4) return dia[4];
    if (diaSemana === 3) return dia[3];
    if (diaSemana === 2) return dia[2];
    if (diaSemana === 1) return dia[1];
    if (diaSemana === 0) return dia[0];

    // return dia[diaSemana]; pode fazer dessa forma e nn precisar usar o if.
}

console.log(diaSemana, diaSemanaTexto(diaSemana))