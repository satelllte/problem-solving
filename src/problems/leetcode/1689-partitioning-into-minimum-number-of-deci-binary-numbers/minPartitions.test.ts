import { describe, test, expect } from 'vitest'
import { minPartitions } from './minPartitions'

describe('minPartitions', () => {
  test('works', () => {
    expect(minPartitions('1')).toEqual(1)
    expect(minPartitions('5')).toEqual(5)
    expect(minPartitions('32')).toEqual(3)
    expect(minPartitions('82734')).toEqual(8)
    expect(minPartitions('27346209830709182346')).toEqual(9)
  })
})
