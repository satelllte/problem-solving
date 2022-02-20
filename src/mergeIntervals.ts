export const mergeIntervals = (intervals: number[][]): number[][] => {
  const intervalsSorted = [...intervals].sort((a, b) => a[0] - b[0])
  const resultIntervals = [intervalsSorted[0]]
  
  for (let index = 1; index < intervalsSorted.length; index++) {
    const curr = intervalsSorted[index]
    const last = resultIntervals[resultIntervals.length - 1]

    if (curr[0] > last[1]) { // no intersection
      resultIntervals.push(curr)
      continue;
    }
    
    if (curr[1] > last[1]) { // intersection
      resultIntervals[resultIntervals.length - 1] = [last[0], curr[1]]
    }
  }

  return resultIntervals
}