/**
 * 判断某个点 和 前面的距离 currDist 以及前面点和再前面点的距离 prevDist 如果相反 就是摆动
 * 需要注意，这种方式需要从 i = 1 开始计算 那么i=0 无法计算
 * 1. 考虑开始点，即便完全都是递增 摆动序列最少都有1个点 除非数组为空 所以初始化值一定是1 把第一个点先加入进去
 * 2. 考虑平坡的情况， 每次的currDist需要和上一个加入到摆动序列的prevDist比较
 *    B ___ C/D D-C 的 距离 需要和 B A 比较
 * A /
 *
 * 3. prev 默认为0  需要考虑 _____/ 开始的情况  一旦出现摆动 prev就不可能为0了
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let cnt = 1; // 把第一个点 默认加入序列
  let prevDist = 0; // 初始化为0

  // 从1开始寻找
  for (let i = 1; i < nums.length; i++) {
    const currDist = nums[i] - nums[i - 1];

    if (
      currDist * prevDist < 0 ||
      /** 开始点的情况 ____/ */ (prevDist === 0 && currDist !== 0)
    ) {
      // 加入队列才更新prev
      prevDist = currDist;
      cnt++;
    }
  }

  return cnt;
};
