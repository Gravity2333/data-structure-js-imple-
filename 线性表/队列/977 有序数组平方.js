// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

// 思路1 数组有正 有 负 先按照绝对值排序 然后一次求平方，绝对值的顺序一定和平方的顺序一致 ，但是这种需要 O(n^2)

// 思路 2 给的数组顺序一定是 平方后的最大值一定在两侧产生，所以也可以用双指针 一个左侧 一个右侧 平方后对比，每次都找到最大值加入新的数组，向前移动加入的指针

/**
 *
 * -               -
 *   -        --
 *      - |-
 * -------0------------
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const result = [];
  while (left <= right) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      result.unshift(Math.pow(nums[left], 2));
      left++;
    } else {
      result.unshift(Math.pow(nums[right], 2));
      right--;
    }
  }

  return result
};

console.log(sortedSquares([-7,-3,2,3,11]))
