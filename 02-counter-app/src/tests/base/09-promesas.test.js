import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Promises tests', () => {
    test('should return an async hero', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            })
    });

    test('should return an error if hero by id doest exist', ( done ) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
});