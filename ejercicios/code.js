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
    if (val !==10) { // Cambia esta línea
      console.log(  "Not Equal");
    }else
    console.log( "Equal");
    
  }
  
  testStrictNotEqual(10);



  //ejercicio de golf
  
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
   
  if(strokes ===1 ){
     return "Hole-in-one!"
  }else if(strokes <= par -2){
   return "Eagle"
  }else if(strokes === par -1){
   return "Birdie"
  } else if(strokes === par ){
   return "Par"
  }else if(strokes === par+1){
   return"Bogey"
  }else if(strokes === par +2 ){
   return "Double Bogey"
  }else if(strokes >= par+3){
   return "Go Home!"
  }else{
   return "retirese";
  }

  // Cambia solo el código encima de esta línea
}

console.log(golfScore(5, 4)); 
console.log(golfScore(5, 6)); 




  
 