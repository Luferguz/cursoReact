
//Extraer datos específicos

// const {id, name, edad} = list;

// console.log(id);
// console.log(name);
// console.log(edad);

const list = {
    id: "ABC123",
    name: "Luisa",
    userName: "Luguz",
    edad:16
};


// const verList = ({id, userName}) =>{
    
//     console.log(id, userName);
// }

// verList(list)

const mostrar = ({name, edad}) =>{
    
    return {
        nombre: name,
        anios: edad,
        medidas: {
            alto: 65,
            ancho: 85
        }
    }
}

const {nombre, anios, medidas: {alto, ancho}} = mostrar(list);

console.log(nombre, anios);
console.log(alto, ancho);

