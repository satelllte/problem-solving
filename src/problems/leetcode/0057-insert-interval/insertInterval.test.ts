import { insertInterval } from './insertInterval'

/**
 * The problem: https://leetcode.com/problems/insert-interval/
 */
describe('insertInterval', () => {

  const test = (interval: number[][], newInterval: number[], expectedResult: number[][]) =>
    expect(insertInterval(interval, newInterval)).toEqual(expectedResult)

  it('works without merging', () => {
    test(
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

  it('merges intervals if needed', () => {
    test(
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

  it('doesn\'t change anything if interval is inside wider one', () => {
    test(
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