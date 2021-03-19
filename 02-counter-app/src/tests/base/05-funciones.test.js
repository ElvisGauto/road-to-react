import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('05-funciones tests', () => {
    test('Should return an object getUser', () => {
        const userTest = {
            uid:  'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual(userTest);
    });
    
    test('Should return an object getUsuarioActivo', () => {
        const username = 'elvis222';

        const userActive = getUsuarioActivo(username);

        expect( userActive ).toEqual({
            uid: 'ABC567',
            username: 'elvis222'
        });
    });
});