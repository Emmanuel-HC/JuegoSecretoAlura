/* Se llevo las lineas 2 y 3 a la funcion asignarTextoElemento
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del numero secreto'; */

/* Se redujo la cantidad de lineas escritas para ser llamadas en 
la linea 19 con la misma funcion asignarTextoElemento.
    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un numero del 1 - 10'; */

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 20;

    console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); */ // se quito para poder complementar el juego

    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
     }
     return;    
    
 }

function limpiarCaja (){
   /* PUEDE SE DE ESTA MANERA
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ''; O DE LA SIGUIENTE TAMBIEN PERO REDUCIDA */
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    /* let numeroSecreto = Math.floor(Math.random()*10)+1; No hace falta crear una variable*/ 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);

    // Si ya se sortearon todos los numeros?
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // Si el numero generado esta incluido en la lista, se hace una operacion, si no, no hace
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}

function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del numero secreto!');
    asignarTextoElemento ('p', `Indica un numero del 1 - ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja (input)
    limpiarCaja();

    /* Indicar mensaje de inicio (Intervalo de inicio),
       Generar un numero aleatorio nuevo,
       Inicializar el numero de intentos */

    condicionesIniciales(); 

    // Desabilidar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

/* Linea 14 se llama a la funcion(linea 10) de esta manera siguiente */

condicionesIniciales();