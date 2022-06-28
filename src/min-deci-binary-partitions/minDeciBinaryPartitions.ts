export const minDeciBinaryPartitions = (n: string): number => {
  let max = -Infinity

  const nums = n.split('')

  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i])
    if (num > max) {
      max = num
    }
    if (max >= 9) {
      return max
    }
  }

  return max
}