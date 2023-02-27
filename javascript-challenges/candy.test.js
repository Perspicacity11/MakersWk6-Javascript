const Sweets = require('../misc/sweets')

describe('Sweets', () => {

it('iterates a new sweet with a name and price', () => {
    let testcandy = new Sweets('Curly Wurly', 2.99)
    expect(testcandy.name).toBe('Curly Wurly')
    expect(testcandy.price).toBe(2.99)
})

it('tests the getName function with a new sweet', () => {
    let testcandy = new Sweets('Rolos', 1.99)
    expect(testcandy.getName()).toBe('Rolos')
})

it('tests the getPrice function with a new sweet', () => {
    let testcandy = new Sweets('Creme Egg', 0.99)
    expect(testcandy.getPrice()).toBe(0.99)
})

})

// UNIT TEST