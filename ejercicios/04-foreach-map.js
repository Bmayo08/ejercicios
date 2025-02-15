

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let i=0

while( i < numeros.length){
    console.log([i])
    i++

}

for (let i = numeros.length -1; i >= 0; i--) {
   console.log(numeros[i]);

}
numeros.forEach((x, y) => {
   if ((x > 1)) {
      console.log(`su index ${y} y su valor es ${x}`)
   }
}
)
let datos = numeros.map(x=> x<5)
console.log(datos)