const telephoneMap: {
  [digit: string]: string[]
} = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z'],
}

export const letterCombinations = (digits: string): string[] => {
  let output: string[] = []

  digits.split('').forEach(digit => {
    if (telephoneMap[digit]) {
      const chars = telephoneMap[digit]
      if (!output.length) {
        output = [...chars]
      } else {
        output = output.flatMap(combination => chars.map(char => `${combination}${char}`))
      }
    }
  })

  return output
}