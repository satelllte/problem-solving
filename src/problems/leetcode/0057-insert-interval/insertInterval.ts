import { mergeIntervals } from "../0056-merge-intervals/merge-intervals";

export const insertInterval = (
  intervals: number[][],
  newInterval: number[],
): number[][] => {
  return mergeIntervals([...intervals, newInterval])
}