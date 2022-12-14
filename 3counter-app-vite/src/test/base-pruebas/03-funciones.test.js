import { getUser, nombre } from "../../base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('pruebas en funciones 03-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);

    });
    
// Pasarlo como funcion
    test('getUsuarioActivo debe retornar un nombre', () => {

        const nombre = 'Lu'

        const activeUser = (nombre) => ({
            uid: 'ABC567',
            username: nombre
        });

        const name = getUsuarioActivo(nombre);
        const user = activeUser(nombre);
        
        expect(user).toEqual(name);

    });
// Pasarlo como objeto
    test('getUsuarioActivo debe retornar un nombre', () => {

        const nombre = 'Lu'
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })

});