const multiply = require('../misc/multiply')

describe('multiply', () => {

it('multiplies 2 by 10', () => {
    expect(multiply(2, 10)).toBe(20)
});

it('mutliplies 5 by 5', () => {
    expect(multiply(5, 5)).toBe(25)
})

});