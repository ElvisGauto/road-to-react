import { getImagen }  from '../../base/11-async-await';

describe('Async Await Tests', () => {
    test('should return url image', async() => {
        const url = await getImagen();

        // expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);

    }); 
});