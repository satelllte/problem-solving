export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>()

  for (let index = 0; index < nums.length; index++) {
    const lookupPair = target - nums[index]
    if (map.has(lookupPair)) {
      return [map.get(lookupPair) as number, index]
    }
    map.set(nums[index], index)
  }
  
  return []
}
