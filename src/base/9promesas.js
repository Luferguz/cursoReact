import { getHeroesId } from "./base/8InmportExport_FilterFind";

// const promesa = new Promise ((resolve, reject) => {
    
//     setTimeout(() => {
//         const heroe = getHeroesId(2);
//         resolve(heroe);
//         // reject("no se encontró")
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log("heroe" , heroe)
// })
// // .catch(e => console.warn(e));

const mostrar = (id) => {
     return new Promise ((resolve, reject) => {
    
            setTimeout(() => {
                const heroe = getHeroesId(id);
                if(resolve(heroe)){
                    return heroe
                }else{
                reject("no se encontró")
                }
            }, 2000)
        });
}

mostrar(5)
.then((heroe) => console.log("heroe", heroe))
.catch(e => console.warn(e));