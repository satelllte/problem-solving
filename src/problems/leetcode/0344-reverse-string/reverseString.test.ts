import { describe, test, expect } from 'vitest'
import { reverseString } from './reverseString'

/**
 * The problem: https://leetcode.com/problems/reverse-string/
 */
describe('reverseString', () => {
  const _test = (input: string, expected: string) => {
    const s = input.split('')
    reverseString(s)
    expect(s).toEqual(expected.split(''))
  }

  test('works with a single item', () => {
    _test('h', 'h')
  })
  test('works with odd number of letters', () => {
    _test('hel', 'leh')
    _test('hello', 'olleh')
  })
  test('works with even number of letters', () => {
    _test('he', 'eh')
    _test('hell', 'lleh')
  })
  test('string case is preserved', () => {
    _test('HelLo', 'oLleH')
  })
})