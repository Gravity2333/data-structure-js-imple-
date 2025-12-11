/**
 * 这个题 和 接雨水相反
 * 最大面积可能会在什么时候出现？ 上凸的时候！
 * 所以 你需要用一个单调递减序列， 找到后面更低的柱子，此时 stack top元素左侧的元素为前面更小的元素
 *   |---|
 * __|   |__
 * 此时 就可以计算 2个柱子中间 夹的柱子的area了
 * 以此类推 可以计算出所有 凸出来的矩形的面积 求最大值即可
 *
 * 为了计算所有的矩形 一定要清空stack 所以height要在最后push一个0 保证所有元素都出栈
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  const stack = [];
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const currentIndex = stack.pop();
      const leftIndex = stack.length === 0 ? -1 : stack[stack.length - 1];
      const rightIndex = i;
      const bottom = rightIndex - leftIndex - 1;
      const h = heights[currentIndex];
      max = Math.max(max, h * bottom);
    }
    stack.push(i);
  }

  return max;
};
