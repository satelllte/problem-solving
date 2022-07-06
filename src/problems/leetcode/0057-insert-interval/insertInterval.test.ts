import { describe, test, expect } from 'vitest'
import { insertInterval } from './insertInterval'

/**
 * The problem: https://leetcode.com/problems/insert-interval/
 */
describe('insertInterval', () => {

  const _test = (interval: number[][], newInterval: number[], expectedResult: number[][]) =>
    expect(insertInterval(interval, newInterval)).toEqual(expectedResult)

  test('works without merging', () => {
    _test(
      [
        [1,4],
        [5,6],
      ],
      [7,8],
      [
        [1,4],
        [5,6],
        [7,8],
      ]
    )
  })

  test('merges intervals if needed', () => {
    _test(
      [
        [1,4],
        [5,6],
        [7,9],
      ],
      [6,7],
      [
        [1,4],
        [5,9],
      ]
    )
  })

  test('doesn\'t change anything if interval is inside wider one', () => {
    _test(
      [
        [2,10],
      ],
      [8,9],
      [
        [2,10],
      ]
    )
  })
})