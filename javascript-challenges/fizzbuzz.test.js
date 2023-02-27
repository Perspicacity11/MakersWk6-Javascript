const fizzBuzz = require('../misc/fizzbuzz')

describe('fizzBuzz', () => {

    it('returns Fizz when provided 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });

    it('returns Buzz when provided 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    });

    it('returns FizzBuzz when provided 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });

    it('returns 8 when provided 8', () => {
        expect(fizzBuzz(8)).toBe(8)
    });



});