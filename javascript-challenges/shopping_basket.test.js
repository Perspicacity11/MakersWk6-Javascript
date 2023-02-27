const ShoppingBasket = require('../misc/shopping_basket')
const Sweets = require('../misc/sweets')

describe('ShoppingBasket', () => {

// INTEGRATION TESTS

it('instantiates a new empty shopping basket', () => {
    let testbasket = new ShoppingBasket([])
    expect(testbasket.items).toEqual([])
})

it('tests the add item function and returns the basket', () => {
    let testbasket = new ShoppingBasket([])
    let testcandy = new Sweets('Rolos', 1.99)
    testbasket.addItem(testcandy)
    expect(testbasket.items).toEqual([testcandy])
})

it('tests the total price function with two items and returns the price', () => {
    let testbasket = new ShoppingBasket([])
    let testcandy = new Sweets('Rolos', 1.99)
    let testcandy2 = new Sweets('Twix', 2.99)
    testbasket.addItem(testcandy)
    testbasket.addItem(testcandy2)
    expect(testbasket.getTotalPrice()).toEqual(4.98)
})

// UNIT TESTS WITH PROTOTYPED CANDY OBJECTS

it('tests the add item function with a prototype sweets object', () => {
    let testbasket = new ShoppingBasket([])
    let fakecandy = new Sweets('Rolos', 1.99)
    testbasket.addItem(fakecandy)
    expect(testbasket.items).toEqual([fakecandy])
})

it('tests the total price function with two prototype objects', () => {
    let testbasket = new ShoppingBasket([])
    let fakecandy = { getPrice: () => 1.99};
    let fakecandy2 = { getPrice: () => 2.99};
    testbasket.addItem(fakecandy)
    testbasket.addItem(fakecandy2)
    expect(testbasket.getTotalPrice()).toEqual(4.98)
})

});