beforeAll(() => {
    jest.mock('./calculator')
    /**
     * this effectively translates to the below
     * calculator.add = jest.fn()
     * calculator.subtract = jest.fn()
     * calculator.multiply = jest.fn()
     * calculator.divide = jest.fn()
     * 
     * jest.mock is mainly used to return a mock response wherever network requests (ajax) are involved
    */
})

test('should first', () => { expect(1).toBe(1) })