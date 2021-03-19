import { retornaArreglo } from '../../base/07-deses-arr';

describe('07-deses-arr tests', () => {
    test('Should return String and number', () => {
        // const arr = retornaArreglo(); // 'ABC', 123

        // expect( arr ).toEqual(['ABC', 123])

        const [ strings, numbers ] = retornaArreglo();

        expect(strings).toBe('ABC');
        expect(typeof strings).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });  
});