import hello from './hello';

test('hello mock', () => {
  const mockHello: jest.Mock<string, [string]> = jest.fn(hello);
  const result = mockHello('abc')
  expect(result).toEqual('Hello, abc!')
  expect(mockHello).toHaveBeenCalledWith('abc')
})
