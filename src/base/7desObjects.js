const array = [
    "Luisa",
    "Fernanda",
    "Guzmán"
]

const [ , ,p3] = array;
console.log(p3);


const verArray = () => {
    return ["Lu", 23]
}

const [alias, edad] = verArray();
console.log(alias, edad)

const ver = (valor) => {
    return [valor, () =>{console.log(`Hola mundo.`)}];
}

const [nombre, setNombre] = ver("Adiós");

console.log(nombre);
setNombre()






