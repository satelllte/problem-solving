import { letterCombinations } from './letterCombinations'

describe('letterCombinations', () => {
  it('works', () => {
    expect(letterCombinations('23')).toEqual(['ad','ae','af','bd','be','bf','cd','ce','cf'])
    expect(letterCombinations('')).toEqual([])
    expect(letterCombinations('2')).toEqual(['a','b','c'])
  })
})
