import { heroes } from "../data/heroes";


export const getHeroesId = (id) => {
    return heroes.find(heroes => heroes.id === id)
}

    // console.log(getHeroesId(1));


export const getHeroesOwner = (owner) => {
    const filtrar = heroes.filter(heroe => heroe.owner === owner);
    return filtrar
};

console.log(getHeroesOwner("DC"))