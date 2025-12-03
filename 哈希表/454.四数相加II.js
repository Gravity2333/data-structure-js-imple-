// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// 示例 1：

// 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// 输出：2
// 解释：
// 两个元组如下：
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// 示例 2：

// 输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// 输出：1
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let cnt = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (!map.has(sum)) {
        map.set(sum, 1);
      } else {
        map.set(sum, map.get(sum) + 1);
      }
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      const left = -(nums3[i] + nums4[j]);
      if (map.has(left)) {
        cnt += map.get(left);
      }
    }
  }

  return cnt;
};
