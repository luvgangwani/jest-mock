test('should return undefined for a mock function', () => {
    const mockFn = jest.fn()

    expect(mockFn('foo')).toBeUndefined()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')
});

test('Implementation 1 - should return a string value for a mock function', () => {
    const mockFn = jest.fn(() => 'bar')

    expect(mockFn('foo')).toBe('bar')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')
});

test('Implementation 2 - should return a string value for a mock function', () => {
    const mockFn = jest.fn().mockImplementation(() => 'bar')

    expect(mockFn('foo')).toBe('bar')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')
});

test('Implementation 3 - should return a string value for a mock function', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValue('bar')

    expect(mockFn('foo')).toBe('bar')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')
});

test('should return a string value just one time for a mock function', () => {
    const mockFn = jest.fn().mockImplementationOnce(() => 'bar')

    expect(mockFn('foo')).toBe('bar')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')

    expect(mockFn('abc')).toBeUndefined()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenCalledWith('foo')
    expect(mockFn).toHaveBeenCalledWith('abc')
});

test('should return a string value when the mock function resolves', () => {
    const mockFn = jest.fn().mockResolvedValue('bar')

    expect(mockFn('foo')).resolves.toBe('bar')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('foo')
});
