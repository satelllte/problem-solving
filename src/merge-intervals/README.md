# [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Example 1:

<pre>
<strong>Input</strong>: intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>Output</strong>: [[1,6],[8,10],[15,18]]
<strong>Explanation</strong>: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
</pre>

## Example 2:

<pre>
<strong>Input:</strong> intervals = [[1,4],[4,5]]
<strong>Output:</strong> [[1,5]]
<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.
</pre>

## Constraints:

- <code>1 <= intervals.length <= 10<sup>4</sup></code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code>
