import '@testing-library/jest-dom';

import { getGreeting } from '../../base/02-template-string';

describe('02-template-string.js Tests', () => {
    test('Should return Hello Mauro', () => {
        const name = 'Mauro';
        const greeting = getGreeting(name);

        expect( greeting ).toBe( 'Hello ' + name );
    });

    test('Should return Hello Carlos if name is empty', () => {
        const greeting = getGreeting();

        expect(greeting).toBe('Hello Carlos');
    });
});