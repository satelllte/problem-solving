import { describe, test, expect } from 'vitest'
import { displayNumber } from './displayNumber'

describe('displayNumber', () => {
  test('before thousands, leaves the result as is', () => {
    expect(displayNumber(1)).toEqual('1')
    expect(displayNumber(10)).toEqual('10')
    expect(displayNumber(100)).toEqual('100')
    expect(displayNumber(999)).toEqual('999')
  })

  test('separates thousands', () => {
    expect(displayNumber(1_000)).toEqual('1 000')
    expect(displayNumber(10_000)).toEqual('10 000')
    expect(displayNumber(100_000)).toEqual('100 000')
    expect(displayNumber(1_000_000)).toEqual('1 000 000')
    expect(displayNumber(1_000_000_000)).toEqual('1 000 000 000')
  })
})