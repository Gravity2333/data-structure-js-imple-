// 209长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 思路 使用滑动窗口 滑动窗口可以用来动态缩放目标尺寸
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = Number.MAX_VALUE;
  while (end < nums.length) {
    // 向后延长 end
    while (end < nums.length) {
      sum += nums[end];
      if (sum >= target) {
        minLen = Math.min(minLen, end - start + 1);
        break;
      }
      end++;
    }
    // 向后收缩 start
    while (end < nums.length && start <= end) {
      sum -= nums[start++];
      if (sum >= target) {
        minLen = Math.min(minLen, end - start + 1);
      } else {
        break;
      }
    }

    end++;
  }
  return minLen > nums.length ? 0 : minLen;
};
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
