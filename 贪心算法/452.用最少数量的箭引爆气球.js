//452.用最少数量的箭引爆气球
/**
 * 这个题目就是 找到一些区间的交集，如何找
 * 1. 按照开始点排序 把开始点相近的区间 尽可能放在一起
 * 2. 从第一个区间开始尝试扩展，如果下一个区间开始点在当前区间结束点之前 就取交集 设定新的区间 如果不在一个区间内，则需要开始计算一个新的区间
 * 注意边界条件 两个范围挨着 也可以扩展
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 按照开始点排序
  points.sort((p1, p2) => p1[0] - p2[0]);
  let currentRange = [...points[0]];
  let cnt = 1;
  // 求交集
  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];
    if (start <= currentRange[1]) {
      // add
      currentRange = [
        Math.max(currentRange[0], start),
        Math.min(currentRange[1], end),
      ];
    } else {
      // 新区间
      cnt++;
      currentRange = [start, end];
    }
  }
  return cnt;
};
