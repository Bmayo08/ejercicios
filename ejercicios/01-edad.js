let enviar = document.getElementById("enviar");
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre"); 
let edad = document.getElementById("edad");

enviar.addEventListener("click", function () {

    if (edad.value <= 17) {
        datos.innerText = (nombre.value + ": eres menor de edad ");
    } else if (edad.value >= 18 && edad.value <= 65) {
        datos.innerText = (nombre.value + ": eres mayor de edad")
    } else if (edad.value > 66) {
        datos.innerText = (nombre.value + ": eres de la tercera edad")

    } else {
        datos.innerText = ("ingrese una edad correcta ")
    }

});