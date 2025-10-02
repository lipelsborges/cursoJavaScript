const elementos = [
    {tag: "p", texto: "frase 1"},
    {tag: "div", texto: "frase 2"},
    {tag: "section", texto: "frase 3"},
    {tag: "footer", texto: "frase 4"},
];

const [{texto}] = elementos

for (i = 0; i < elementos.length; i++){
    const {texto} = elementos[i];
    console.log(texto)
}
