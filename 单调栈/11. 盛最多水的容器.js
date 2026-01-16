/** 这个题目不用单调栈啊 暴力方法 会超时间
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const len = j - i;
      const currentHeight = Math.min(height[i], height[j]);
      const area = len * currentHeight;

      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};

/** 双指针 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
