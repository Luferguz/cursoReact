
describe('DemoComoponentText', () => {

    test('Esta prueba no puede fallar', () => {

        // 1. inicialización
        const message1 = 'Hola mundo';
        // 2. estímulo
        const message2 = message1.trim();
        // 3. compotamiento 
        expect(message1).toBe(message2);
    });

});

