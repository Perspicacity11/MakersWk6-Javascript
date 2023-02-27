const Pokedex = require('./api')

describe('Pokedex', () => {
  it('tests the fetch function by returning a promise for info on Pokemon 1', async () => {
    const newpokedex = new Pokedex();
    const testpokemon = await newpokedex.fetchPokemon(1)
        expect(testpokemon.id).toBe(1);
        expect(testpokemon.name).toEqual('bulbasaur')
    })

    it('tests the catch function by returning info on Pokemon 1', async () => {
        const newpokedex = new Pokedex();
        newpokedex.catch(1)
        const testpokemon = await newpokedex.all()
        console.log(testpokemon);
            expect(testpokemon[0].id).toBe(1);
            expect(testpokemon[0].name).toEqual('bulbasaur')
        })

})