const add = require('../misc/add')

describe('add', () => {

//TEST CASES HERE

it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4)
});

it('adds 5 and 7', () => {
    expect(add(5, 7)).toBe(12)
})

});