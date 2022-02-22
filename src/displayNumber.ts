export const displayNumber = (x: number): string => {
  return `${x}`
    .split('')
    .reverse()
    .map((value, index) => {
      if (!index) {
        return value
      }
      return index % 3 ? value : `${value} `
    })
    .reverse()
    .join('')
}