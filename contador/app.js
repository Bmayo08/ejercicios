let suma = document.getElementById("suma")
let resta = document.getElementById("resta")
let mostrar = document.getElementById("mostrar")
let contador = 0
let reset = document.getElementById("reset")

reset.addEventListener("click",function(){
    contador =0
    mostrar.innerText=contador
})
suma.addEventListener("click", function () {
    
    contador += 1
    mostrar.innerText = contador
})
resta.addEventListener("click",function(){
    
    contador -= 1
    mostrar.innerText= contador
})