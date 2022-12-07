
const nombre = "Luisa";
const apellido ="Guzmán";

const completeName = ` Hola yo soy ${nombre} ${apellido}`;

console.log(completeName);

function saludo () {
    return `Hola ` + nombre;
}

console.log(`${saludo(nombre)} bienvenida`)

const num1 = 30
const num2 = 45

function sumaFun () {
    const suma = num1 + num2;
    return `La suma es:` + suma
}

console.log(sumaFun(num1, num2))