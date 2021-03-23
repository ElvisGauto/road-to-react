import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Heroes Method tests', () => {
   test('Should retun a hero  by id', () => {
    const id  = 1;
    const hero = getHeroeById(id)
    const heroData = heroes.find( h => h.id === id );

    expect( hero ).toEqual(heroData);
   });

   test('Should retun undefined if hero doest exist', () => {
    const id  = 10;
    const hero = getHeroeById(id);

    expect( hero ).toBe( undefined );
   });

   test('Should return an array of DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);

    expect( heroes ).toEqual(heroesData);
   });

   test('Should return an array of Marvel heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect( heroes.length ).toBe( 2 );
   });
});