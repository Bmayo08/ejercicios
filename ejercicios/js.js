// ejercicio 1
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
// Ejercicio 2
let promedio = document.getElementById("promedio");
let notas = document.getElementById("notas");
let num1 = document.getElementById("num1"); 
let num2 = document.getElementById("num2"); 
let num3 = document.getElementById("num3");

promedio.addEventListener("click", function () {
    let valor1 = parseFloat(num1.value)
    let valor2 = parseFloat(num2.value)
    let valor3 = parseFloat(num3.value)
    let suma = valor1 + valor2 + valor3
    let promedio = suma / 3


    if (promedio >= 3) {

        notas.innerText = ("su promedio es: " + promedio.toFixed(2) + " aprobo")
    } else if (promedio < 3) {

        notas.innerText = ("su promedio es: " + promedio.toFixed(2) + " reprobo")
    } else {
        notas.innerText = ("ingrese un numero valido ej: 4 o 4.1")
    }

})

// Ejercicio 3
let grados = document.getElementById("grados");
let textogrados = document.getElementById("textogrados");
let convertidor = document.getElementById("convertidor"); 
let selector = document.getElementById("selector");      
convertidor.addEventListener("click", function () {
    let temperatura = parseFloat(grados.value);
    let resultadoConversion;

    if (selector.value === "celsius") {

        resultadoConversion = (temperatura * 9 / 5) + 32;
        textogrados.innerText = temperatura + " °C convertido a Fahrenheit es: " + resultadoConversion.toFixed(2) + " °F";
    } else if (selector.value === "fahrenheit") {
        resultadoConversion = (temperatura - 32) / 1.8;
        textogrados.innerText = temperatura + " °F convertido a Celsius es: " + resultadoConversion.toFixed(2) + " °C";
    }
});

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let i=0

// while( i < numeros.length){
//     console.log([i])
//     i++

// }

// for (let i = numeros.length; i >= 0; i--) {
//    console.log(numeros[i]);

// }
// numeros.forEach((x, y) => {
//    if ((x > 1)) {
//       console.log(`su index ${y} y su valor es ${x}`)
//    }
// }
// )
// let datos = numeros.map(x=> x<5)
// console.log(datos)





