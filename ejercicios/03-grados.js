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
