
const saludar = function (name) {
    return `Hola ${name}`;
};



const saludar2 = (name) => {
    return `Hola ${name}`;
};


const saludar3 = (name) =>  `Hola ${name}`;

const saludar4 = () => `Hola mundo`;

const user = () => ({
    id: "sodif",
    userName: "Luguz"
});

const getUserActive = (nombre) =>({
    id: "sodif",
    userName: nombre,
}); 

console.log(saludar("Lu"));
console.log(saludar2("Lui"));
console.log(saludar3("Luis"));
console.log(saludar4());
console.log(user());
console.log(getUserActive("Luisa"));
