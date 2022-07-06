import { describe, test, expect } from 'vitest'
import { letterCombinations } from './letterCombinations'

describe('letterCombinations', () => {
  test('empty input has no output', () => {
    expect(letterCombinations('')).toEqual([])
  })
  
  test('"1" does not affect output', () => {
    expect(letterCombinations('1')).toEqual([])
    expect(letterCombinations('11')).toEqual([])
    expect(letterCombinations('12')).toEqual(['a','b','c'])
    expect(letterCombinations('31')).toEqual(['d','e','f'])
  })

  test('combinations work', () => {
    expect(letterCombinations('23')).toEqual([
      'ad','ae','af',
      'bd','be','bf',
      'cd','ce','cf',
    ])
    expect(letterCombinations('78')).toEqual([
      'pt','pu','pv',
      'qt','qu','qv',
      'rt','ru','rv',
      'st','su','sv',
    ])
  })

  test('combinations with repeated digits work the same way as non-repeated', () => {
    expect(letterCombinations('22')).toEqual([
      'aa','ab','ac',
      'ba','bb','bc',
      'ca','cb','cc',
    ])
  })
})
