/**
 * 回溯模板
 * 终止条件 收集结果
 * 循环遍历每个结点的搜索逻辑
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k, start = 1, currentResult = [], results = []) {
  /** 终止条件，长度达到k */
  if (currentResult.length === k) {
    /** 收集结果 */
    results.push(currentResult);
  } else {
    for (let i = start; i <= n; i++) {
      combine(n, k, i + 1, [...currentResult, i], results);
    }
  }

  return results;
};
