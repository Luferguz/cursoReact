import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });

                done();
            });
    })
    test('getHeroByIdAsync debe retornar un error cuando el héroe no existe', () => {

        const id = 100;
        getHeroeByIdAsync(id)

            .catch(error => {
                expect(error).toBe(`No se puedo encontrar el héroe ${id}`);

                done();
            });
    })
})
