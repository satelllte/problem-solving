import { mergeIntervals } from './merge-intervals'

/**
 * The problem: https://leetcode.com/problems/merge-intervals/
 */
describe('mergeIntervals', () => {

  const test = (input: number[][], expected: number[][]) =>
    expect(mergeIntervals(input)).toEqual(expected)

  it('merges intervals (sorted)', () => {
    test(
      [
        [1,4],
        [4,5],
      ],
      [
        [1,5],
      ]
    )
  })

  it('merges intervals (unsorted)', () => {
    test(
      [
        [6,8],
        [4,5],
        [1,4],
      ],
      [
        [1,5],
        [6,8],
      ]
    )
  })

  it('when no intervals intersected, the result equals to input', () => {
    test(
      [
        [1,4],
        [8,10],
      ],
      [
        [1,4],
        [8,10],
      ]
    )
  })

  it('when no intervals intersected, the result equals to input (unsorted)', () => {
    test(
      [
        [8,10],
        [1,4],
      ],
      [
        [1,4],
        [8,10],
      ]
    )
  })

  it('intervals inside others skipped', () => {
    test(
      [
        [5,10],
        [6,9],
        [6,7],
        [6,8],
        [12,13],
        [7,8],
        [4,11],
      ],
      [
        [4,11],
        [12,13],
      ]
    )
    test(
      [
        [5,10],
        [6,9],
      ],
      [
        [5,10],
      ]
    )
  })

  it('duplicates don\'t break anything', () => {
    test(
      [
        [6,9],
        [1,5],
        [6,7],
        [6,8],
        [6,7],
        [6,7],
        [6,8],
      ],
      [
        [1,5],
        [6,9],
      ]
    )
  })

  it('when a single item received, the result equals to input', () => {
    test([[5,11]], [[5,11]])
    test([[1,2]], [[1,2]])
    test([[2,2]], [[2,2]])
  })
})
