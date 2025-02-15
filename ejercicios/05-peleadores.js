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