import { RangeModule } from './RangeModule'

/**
 * The problem: https://leetcode.com/problems/range-module/
 */
describe('RangeModule', () => {
  it('queryRange calls are false by default', () => {
    const rm = new RangeModule()
    expect(rm.queryRange(1,2)).toEqual(false)
    expect(rm.queryRange(1,4)).toEqual(false)
    expect(rm.queryRange(2,3)).toEqual(false)
    expect(rm.queryRange(10,20)).toEqual(false)
  })

  it('queryRange works properly on a single range added', () => {
    const rm = new RangeModule()
    rm.addRange(10, 20)
    expect(rm.queryRange(10, 15)).toEqual(true)
    expect(rm.queryRange(13, 15)).toEqual(true)
    expect(rm.queryRange(18, 19)).toEqual(true)
    expect(rm.queryRange(18, 20)).toEqual(false) // 20 is not included in [10, 20)
  })
  
  it('queryRange works properly on a range with removed part', () => {
    const rm = new RangeModule()
    rm.addRange(10, 20)
    rm.removeRange(14, 16)
    expect(rm.queryRange(10, 14)).toEqual(true) // every number in [10, 14) is being tracked
    expect(rm.queryRange(13, 15)).toEqual(false) // numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked
    expect(rm.queryRange(16, 17)).toEqual(true) // 16 in [16, 17) is still being tracked, despite the remove operation
  })

  it('multiple add/remove calls work properly', () => {
    const rm = new RangeModule() // []                         |
    rm.addRange(10, 20)          // [10,20)                    | adding
    rm.addRange(11, 16)          // [10,20)                    | shouldn't affect anything
    rm.addRange(19, 25)          // [10,25)                    | merging
    rm.removeRange(15, 20)       // [10,15), [20,25)           | splitting
    rm.addRange(27, 30)          // [10,15), [20,25), [27,30)  | adding
    rm.removeRange(27, 29)       // [10,15), [20,25), [29,30)  | cutoff
    rm.removeRange(5, 12)        // [12,15), [20,25), [29,30)  | cutoff

    expect(rm.queryRange(10, 12)).toEqual(false) // [10,12) NOT tracked
    expect(rm.queryRange(12, 13)).toEqual(true)  // [12,13) tracked
    expect(rm.queryRange(13, 15)).toEqual(true)  // [13,15) tracked
    expect(rm.queryRange(15, 16)).toEqual(false) // [15,16) NOT tracked
    expect(rm.queryRange(20, 25)).toEqual(true)  // [20,25) tracked
    expect(rm.queryRange(28, 29)).toEqual(false) // [28,29) NOT tracked
    expect(rm.queryRange(29, 30)).toEqual(true)  // [28,29) tracked
    expect(rm.queryRange(30, 31)).toEqual(false) // [30,31) NOT tracked
  })
})