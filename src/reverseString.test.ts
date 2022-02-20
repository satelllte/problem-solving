import { reverseString } from './reverseString'

/**
 * The problem: https://leetcode.com/problems/reverse-string/
 */
describe('reverseString', () => {
  const test = (input: string, expected: string) => {
    const s = input.split('')
    reverseString(s)
    expect(s).toEqual(expected.split(''))
  }

  it('works with a single item', () => {
    test('h', 'h')
  })
  it('works with odd number of letters', () => {
    test('hel', 'leh')
    test('hello', 'olleh')
  })
  it('works with even number of letters', () => {
    test('he', 'eh')
    test('hell', 'lleh')
  })
  it('string case is preserved', () => {
    test('HelLo', 'oLleH')
  })
  it('wrong test', () => {
    test('this is the input', 'WRONG RESULT')
  })
})