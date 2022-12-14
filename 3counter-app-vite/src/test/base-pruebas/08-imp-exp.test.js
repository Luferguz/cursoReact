import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas 08-imp-exp', () => { 

    test('Debe retornar un héroe por id', () => {

        const id=1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })
    test('Debe retornar un undefield si no existe', () => {

        const id=100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy()

        // console.log(heroe)
    })


    test('Evaluar que el owner sea igual a "DC"', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        // console.log(heroes)
    })

    test('Evaluar que el owner sea igual a "Marvel"', () => {

        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        console.log(heroe)
    })
})


