import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Prueba 02-template-string-test', () => {

     test('getSaludo debe retornar "Hola Lu"', () => { 
        const name = 'Lu'
        const message = getSaludo(name)

        expect (message).toBe(`Hola ${name}`)
    })

})