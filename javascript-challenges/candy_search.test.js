const searchCandies = require('./candy_search')

describe('searchCandies', () => {

it('uses the string Ma and price 10 to return Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
})

it('uses the string Ma and price 2 to return Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
})

it('uses the string S and price 10 to return Skitties, Skittles and Starburst', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
})

it('uses the string S and price 4 to return Skitties and Skittles', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
})

// it('uses the string ma and price 10 to return Mars and Maltesers', () => {
//     expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
// })

});