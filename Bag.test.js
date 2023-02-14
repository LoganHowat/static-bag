const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    test('bag is too heavy returns an error', () => {
        expect(() => new Bag(50)).toThrowError('Bag too heavy')
    })
})