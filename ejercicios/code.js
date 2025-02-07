// function nextInLine(arr, item) {
//     // Cambia solo el código debajo de esta línea
//     arr.push(item)
//     return arr.shift();
//     // Cambia solo el código encima de esta línea
// }

// // Configuración
// let testArr = [1, 2, 3, 4, 5];

// // Muestra el código
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

//////

function Personaje(nombre) {

    this.nombre = nombre;
    this.puntosVida = 100;
    this.magia = 100;
    this.resistencia = 100;

    this.curar = function (jugadorObjetivo) {
        if (this.magia >= 40) {
            this.magia -= 40;
            jugadorObjetivo.puntosVida += 20;
        } else {
            console.log(`${this.nombre} se te acabo la magia`)
        }
        this.estado(jugadorObjetivo)
    };

    this.pegar = function (jugadorObjetivo) {

        if (this.resistencia > 40) {
            this.resistencia -= 40;
            jugadorObjetivo.puntosVida -= 50;

            if (jugadorObjetivo.puntosVida <= 0) {
                console.log(`El jugador ${jugadorObjetivo.nombre} está muerto.`);
            }
        } else {
            console.log(`${this.nombre} no tiene suficiente resistencia para pegar.`);
        }
        this.estado(jugadorObjetivo)
    };

    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.log(jugadorObjetivo);
    }
}

const curador = new Personaje("Curador");
const luchador = new Personaje("Luchador");

console.log(curador);
console.log(luchador);

curador.curar(luchador);
luchador.pegar(curador);

// Configuración
function testStrictNotEqual(val) {
    if (val !== 10) { // Cambia esta línea
        console.log("Not Equal");
    } else
        console.log("Equal");

}

testStrictNotEqual(10);



//ejercicio de golf

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Cambia solo el código debajo de esta línea

    if (strokes === 1) {
        return "Hole-in-one!"
    } else if (strokes <= par - 2) {
        return "Eagle"
    } else if (strokes === par - 1) {
        return "Birdie"
    } else if (strokes === par) {
        return "Par"
    } else if (strokes === par + 1) {
        return "Bogey"
    } else if (strokes === par + 2) {
        return "Double Bogey"
    } else if (strokes >= par + 3) {
        return "Go Home!"
    } else {
        return "retirese";
    }

    // Cambia solo el código encima de esta línea
}

console.log(golfScore(5, 4));
console.log(golfScore(5, 6));

// Conteo de cartas
// En el juego de casino Blackjack, un jugador puede determinar si
//  tiene una ventaja en la siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas
//  y bajas que quedan en la baraja.Esto se llama cuenta de tarjetas.

// Tener más cartas altas en la baraja es una ventaja para el jugador.
// Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
// Cuando el conteo es positivo, el jugador debería apostar alto.Cuando el conteo da 0 o negativo,
//  el jugador debería apostar bajo.

// Cambios del conteo	Cartas
//     + 1	2, 3, 4, 5, 6
// 0	7, 8, 9
//     - 1	10, 'J', 'Q', 'K', 'A'
// Escribirás una función para contar cartas.
// Recibirá un parámetro card(carta) que puede ser un número o una cadena y aumentar o reducir la variable global count
// (conteo) de acuerdo al valor de la carta(observa la tabla).La función devolverá una cadena con el conteo actual 
// y la cadena Bet(Apuesta) si el conteo es positivo, o Hold(Espera) si el conteo es cero o negativo.El conteo actual
//  y la decisión del jugador(Bet o Hold) deben estar separados por un solo espacio.


let count = 0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + "Bet"
    } else {
        return count + "Hold"
    }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

