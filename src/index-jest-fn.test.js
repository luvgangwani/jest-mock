import * as calculator from './calculator';
import { performAdd, performDivide, performMultiply, performSubtract } from './index';

beforeAll(() => {
    calculator.add = jest.fn().mockReturnValue(8)
    calculator.subtract = jest.fn().mockImplementation(() => 4)
    calculator.multiply = jest.fn(() => 512)
    calculator.divide = jest.fn().mockImplementation(() => 45)
});

test('should return the mocked value for performAdd', () => {
    expect(performAdd(1, 2)).not.toBe(3)
    expect(performAdd(1, 2)).toBe(8)
})

test('should return the mocked value for performSubtract', () => {
    expect(performSubtract(1, 2)).not.toBe(1)
    expect(performSubtract(1, 2)).toBe(4)
})

test('should return the mocked value for performMultiply', () => {
    expect(performMultiply(1, 2)).not.toBe(2)
    expect(performMultiply(1, 2)).toBe(512)
})

test('should return the mocked value for performDivide', () => {
    expect(performDivide(1, 2)).not.toBe(2)
    expect(performDivide(1, 2)).toBe(45)
})
