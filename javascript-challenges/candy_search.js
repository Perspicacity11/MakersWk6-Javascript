  const searchCandies = (search_string, max_price) => {

    const candies = [
        { name: 'Aero', price: 1.99 },
        { name: 'Skitties', price: 2.99 },
        { name: 'Mars', price: 1.49 },
        { name: 'Maltesers', price: 3.49 },
        { name: 'Skittles', price: 1.49 },
        { name: 'Starburst', price: 5.99 },
        { name: 'Ricola', price: 1.99 },
        { name: 'Polkagris', price: 5.99 },
        { name: 'Pastila', price: 4.99 },
        { name: 'Mentos', price: 8.99 },
        { name: 'Raffaello', price: 7.99 },
        { name: 'Gummi bears', price: 10.99 },
        { name: 'Fraise Tagada', price: 5.99 }
      ];

    // const search_string_capitalized = (search_string) => {
    //     return search_string[0].toUpperCase()
    // };

    let selected = candies.filter( candy => candy.name.includes(search_string));

    let final_selected = selected.filter( candy => candy.price < max_price);

    let final_selected_names = final_selected.map( a => a.name)

    return final_selected_names

  }

module.exports = searchCandies;

console.log(searchCandies('Ma', 10))
console.log(searchCandies('Ma', 2))
console.log(searchCandies('S', 10))
console.log(searchCandies('S', 4))
console.log(searchCandies('ma', 10))

    