class Pokedex {

constructor() {
    this.pokedex = []
}

fetchPokemon (pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((response) => ({
        name: response.name,
        id: response.id,
        height: response.height,
        weight: response.weight,
        type: response.types.map((object) => {
            return object.type.name
        })
    }))
    // .then((response) => console.log(response));
};

// async format (response) { 
//     return {
//         name: response.name,
//         id: response.id,
//         height: response.height,
//         weight: response.weight,
//         type: response.types.map((object) => {
//             return object.type.name
//         })
//     }
// }

async catch (pokemon) {
    this.pokedex.push(this.fetchPokemon(pokemon))
}

async all () {
    const pokemonList = await Promise.all(this.pokedex)
    console.log(pokemonList);
    return pokemonList
}

}

module.exports = Pokedex;



// let newpokedex = new Pokedex
// newpokedex.catch('bulbasaur')
// newpokedex.catch('charizard')
// newpokedex.catch('pikachu')
// newpokedex.catch('67')
// newpokedex.catch('90')

// console.log(newpokedex.all())
