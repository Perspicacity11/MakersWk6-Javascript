const fetchPokemon = async(pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data
    // const formatted = await format(data);
    // return formatted;
}

let newPokemon = fetchPokemon('pikachu')
console.log(newPokemon)

// const format = (response) => { 
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

// console.log(fetchPokemon('pikachu'))

module.exports = fetchPokemon;