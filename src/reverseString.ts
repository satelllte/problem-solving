export const reverseString = (s: string[]): void => {
  const reverse = (s: string[], firstIndex: number = 0, lastIndex: number = s.length - 1) => {
    if (firstIndex >= lastIndex) {
      return
    }
    [s[firstIndex], s[lastIndex]] = [s[lastIndex], s[firstIndex]]
    reverse(s, firstIndex + 1, lastIndex - 1)
  }

  reverse(s)
};