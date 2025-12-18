// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

// 示例 1:

// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3
// 解释:
// 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引。
// 示例 2:

// 输入: gas = [2,3,4], cost = [3,4,3]
// 输出: -1
// 解释:
// 你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
// 我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
// 开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
// 开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
// 你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
// 因此，无论怎样，你都不可能绕环路行驶一周。

/** 思路 计算增量值
 *  从每个节点开始尝试 如果 某一步 增 < 0了 直接排除
 *  贪心 当走到某个节点发现无法到达时，那么之前的节点也无法到达，因为 开始点 + 中间节点 都抵不过最后一个节点，那么中间节点作为开始点 更抵不过了！
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  /** 每个站点 先加油 再蚝油 到达下一站点的 增量 */
  const increment = gas.map((_, i) => gas[i] - cost[i]);

  let start = 0;
  while (start < increment.length) {
    // 开始点就是<0 直接continue
    if (increment[start] < 0) {
      start = start + 1
      continue;
    }
    let currentGas = 0;
    let currentPos = start;
    let steps = 0; // 走的步数
    while (steps < increment.length) {
      currentGas += increment[currentPos];
      if (currentGas < 0) {
        //没走到 从结束点开始继续找
        start = start + steps + 1;
        break;
      } else {
        // 走到
        steps++;
        // 更新 pos
        currentPos = (start + steps) % increment.length;
      }
    }

    if (steps === increment.length) {
      return start;
    }
  }
  return -1
};
