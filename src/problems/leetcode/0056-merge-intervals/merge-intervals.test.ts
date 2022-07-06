import { describe, test, expect } from 'vitest'
import { mergeIntervals } from './merge-intervals'

/**
 * The problem: https://leetcode.com/problems/merge-intervals/
 */
describe('mergeIntervals', () => {

  const _test = (input: number[][], expected: number[][]) =>
    expect(mergeIntervals(input)).toEqual(expected)

  test('merges intervals (sorted)', () => {
    _test(
      [
        [1,4],
        [4,5],
      ],
      [
        [1,5],
      ]
    )
  })

  test('merges intervals (unsorted)', () => {
    _test(
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

  test('when no intervals intersected, the result equals to input', () => {
    _test(
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

  test('when no intervals intersected, the result equals to input (unsorted)', () => {
    _test(
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

  test('intervals inside others skipped', () => {
    _test(
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
    _test(
      [
        [5,10],
        [6,9],
      ],
      [
        [5,10],
      ]
    )
  })

  test('duplicates don\'t break anything', () => {
    _test(
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

  test('when a single item received, the result equals to input', () => {
    _test([[5,11]], [[5,11]])
    _test([[1,2]], [[1,2]])
    _test([[2,2]], [[2,2]])
  })
})
