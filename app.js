

/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroS = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumeroS.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {

    if (listaNumeroS.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumeroS.push(numeroGenerado);
        return numeroGenerado;
    }
   
    }
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}` );
    document.getElementById("reiniciar").removeAttribute("disabled");
    
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");

        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
    
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}


condicionesIniciales();