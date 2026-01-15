/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.toSorted((a, b) => a[0] - b[0]);
  const results = [];
  let current = intervals.shift();
  for (const interval of intervals) {
    if (interval[0] <= current[1]) {
      current = [
        Math.min(current[0], interval[0]),
        Math.max(current[1], interval[1]),
      ];
    } else {
      results.push(current);
      current = interval;
    }
  }
  return results.concat([current])
};
