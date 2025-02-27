

const multiplicacion = 6;

for (let x = 1; x <= 10; x++) {
    console.log(`\nTabla de multiplicar de ${x} 👺`);

    for (let i = 1; i <= 10; i++) {
        console.log(`Resultado: ${x} x ${i} = ${x * i}`);
    }
}

console.log(`\nTabla de multiplicar del ${multiplicacion}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`Resultado: ${multiplicacion} x ${i} = ${multiplicacion * i}`);
}

