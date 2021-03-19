
describe('Demo.test.js Tests', () => {
    test('should be equals string' , () => {
        
        // 1. inicialización
        const message = 'Hola Mundo';
    
        // 2. estímulo
        const message2 = 'Hola Mundo';
    
        //  3.  Observar el comportamiento
        expect(message).toBe(message2);
    });
});
