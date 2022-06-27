import { twoSum } from './twoSum'

describe('twoSum', () => {
  it('solves basic cases (positive numbers)', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    expect(twoSum([3,2,4], 6)).toEqual([1,2])
    expect(twoSum([3,3], 6)).toEqual([0,1])
  })

  it('solves when nums have zeros', () => {
    expect(twoSum([6,0], 6)).toEqual([0,1])
    expect(twoSum([0,5,1], 1)).toEqual([0,2])
  })
  
  it('solves zero target', () => {
    expect(twoSum([6,-6], 0)).toEqual([0,1])
    expect(twoSum([0,5,0], 0)).toEqual([0,2])
    expect(twoSum([3,0,12,-3], 0)).toEqual([0,3])
  })
  
  it('solves negative target', () => {
    expect(twoSum([6,-6,2], -4)).toEqual([1,2])
  })
})