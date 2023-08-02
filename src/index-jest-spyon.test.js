import * as calculator from './calculator';
import { performAdd } from '.';

test('should return a mock value and then the original value for performAdd', () => {
    
    const mockAdd = jest.spyOn(calculator, 'add')
    mockAdd.mockImplementation(() => 8)

    expect(performAdd(1, 2)).toBe(8)

    mockAdd.mockRestore()
    expect(performAdd(1, 2)).toBe(3)
});