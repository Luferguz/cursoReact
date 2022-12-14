import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('pruebas 07-deses-arr', () => {  

    test('Debe retornar strings y números', () => { 
    
        const [letter, number] = retornaArreglo();

        expect(letter).toBe("ABC");
        expect(number).toBe(123)

        expect(typeof letter).toBe('string')
        expect(typeof number).toBe('number')
        
        expect(letter).toEqual(expect.any(String));
    })

})