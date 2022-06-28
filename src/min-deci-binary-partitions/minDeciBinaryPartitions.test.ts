import { minDeciBinaryPartitions } from './minDeciBinaryPartitions'

describe('minDeciBinaryPartitions', () => {
  it('works', () => {
    expect(minDeciBinaryPartitions('1')).toEqual(1)
    expect(minDeciBinaryPartitions('5')).toEqual(5)
    expect(minDeciBinaryPartitions('32')).toEqual(3)
    expect(minDeciBinaryPartitions('82734')).toEqual(8)
    expect(minDeciBinaryPartitions('27346209830709182346')).toEqual(9)
  })
})
