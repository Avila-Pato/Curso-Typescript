
// $ es una variable del Dom para capturarlo
// HTMLSpanElement dice que esta variable es un elemento del Dom para ser
// mucho mas especifico(Interfaz) HTMLSpanElement se guarda en el tsconfig en el lib
// ! se declara que el lemento $counter! existe por ende no se necerario el as siempre y cuando exista 
// ! en este aso HTMLButtonElement lo tiene proque no declaro que esta el elemento al 100%

const $counter = document.getElementById('counter') ;
const $btnIncrementCounter = document.getElementById("btnIncrementCounter") as HTMLButtonElement;
let counter = 0;
$btnIncrementCounter.addEventListener('click', () => {
    //Incremento
    counter++;
    //callback
    $counter!.textContent= `${counter}`;
});

