
const list = {
    nombre: "Luisa",
    apellido: "Guzmán",
    edad: 20,
    direccion: {
        ciudad: "Ibagué",
        barrio: "Arboleda",
    }
};

const lista = {...list}
lista.nombre = "Miguel"

console.log(list)
console.log(lista)