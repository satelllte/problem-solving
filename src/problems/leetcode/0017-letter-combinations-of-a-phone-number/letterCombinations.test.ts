import { letterCombinations } from './letterCombinations'

describe('letterCombinations', () => {
  it('empty input has no output', () => {
    expect(letterCombinations('')).toEqual([])
  })
  
  it('"1" does not affect output', () => {
    expect(letterCombinations('1')).toEqual([])
    expect(letterCombinations('11')).toEqual([])
    expect(letterCombinations('12')).toEqual(['a','b','c'])
    expect(letterCombinations('31')).toEqual(['d','e','f'])
  })

  it('combinations work', () => {
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
})
