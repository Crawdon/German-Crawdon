/*
Juego de dados en el que tenés cierta cantidad de fichas en el tablero 
Tiras el dado y juntas ese número de fichas 
El ultimo en levantar tapitas gana
*/

var turno;
var cantidadDeCartas;

var jugador1Name = document.querySelector('#jugador1')
var jugador2Name = document.querySelector('#jugador2')
//esto se va a usar para poder elejir el nombre de los jugadores

var D6jugador1 = document.querySelector("#D6J1");
var D6jugador2 = document.querySelector("#D6J2");

var resultadoD6j1 = document.querySelector("#resultadoJ1");
var resultadoD6j2 = document.querySelector("#resultadoJ2");

var resultadoD6j1Display = document.querySelector("#resultadoJ1Display");
var resultadoD6j2Display = document.querySelector("#resultadoJ2Display");

var displayDeCartas = document.querySelector("#card_cant");

var turnoDisplay = document.querySelector("#turno");

init();


D6jugador1.addEventListener("click", function () {
    if (turno == 1) {
        resultadoD6j1 = 1 + (Math.floor(Math.random() * 6));
        resultadoD6j1Display.innerHTML = resultadoD6j1;

        //aca va un if y una funcion
        cantidadDeCartas -= resultadoD6j1;
        console.log(cantidadDeCartas);
        displayDeCartas.innerHTML = cantidadDeCartas;

        turno = 2;
        turnoDisplay.innerHTML = turno;
    }
    winCondition();
});


D6jugador2.addEventListener("click", function () {
    if (turno == 2) {
        resultadoD6j2 = 1 + (Math.floor(Math.random() * 6));
        resultadoD6j2Display.innerHTML = resultadoD6j2;

        //aca va un if y una funcion
        cantidadDeCartas -= resultadoD6j2;
        console.log(cantidadDeCartas);
        displayDeCartas.innerHTML = cantidadDeCartas;

        turno = 1;
        turnoDisplay.innerHTML = turno;
    }
    winCondition();
});

function init() {
    turno = 1;
    cantidadDeCartas = 30;
    //def jugadores
    //def cantidad de cartas
    //def dados
}
function winCondition() {
    if (cantidadDeCartas <= 0) {
        resultadoD6j2Display.innerHTML = resultadoD6j2;
        displayDeCartas.innerHTML = cantidadDeCartas;
        alert("Gana el jugador " + turno)

    }
}