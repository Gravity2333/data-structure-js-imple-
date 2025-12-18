// 53. 最大子数组和
/**
 * 这个题有2种做法
 * 1. dp
 * 2. 贪心
 * 贪心法就是 维护一个子数组，一直向后延伸，如果遍历到某个元素 子数组和<0了 那么就从下一个元素重新开始
 * 扩展数组
 */

/**
 * 思路 i 结尾的最大和连续子数组和为dp[i]
 * dp[i] = dp[i-1] + nums[i] < dp[i-1] ? 更小了 此时 dp[i] = Max(dp[i-1] + nums[i],nums[i]) : 更大了 果断 dp[i] = dp[i-1] + nums[i]
 * dp[0] = nums[0]
 * 顺序
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] + nums[i] < nums[i]) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

/**
 * 贪心 累计如果<0了 就 中止 从下一个开始
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxVal = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxVal = Math.max(sum, maxVal);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxVal
};
