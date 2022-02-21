import { mergeIntervals } from "./mergeIntervals";

export const insertInterval = (
  intervals: number[][],
  newInterval: number[],
): number[][] => {
  return mergeIntervals([...intervals, newInterval])
}