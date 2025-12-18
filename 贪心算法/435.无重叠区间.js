// 435.无重叠区间

/**
 * 这个题的思路是
 * 先按照开始点排序
 * 找交集，如果相交 就把范围更靠后的删除 保证尽可能小的和其他范围构成交集
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 开始点排序
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);
  let cnt = 0;
  let range = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start,end] = intervals[i]
    if(start < range[1]){
        cnt++
      range = [Math.min(start,range[0]),Math.min(end,range[1])]
    }else{
        range = [start,end]
    }
  }

  return cnt
};
