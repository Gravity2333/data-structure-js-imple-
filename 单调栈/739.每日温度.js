// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1：

// 输入：temperatures = [73,74,75,71,69,72,76,73]
// 输出：[1,1,4,2,1,1,0,0]
// 示例 2：

// 输入：temperatures = [30,40,50,60]
// 输出：[1,1,1,0]
// 示例 3：

// 输入：temperatures = [30,60,90]
// 输出：[1,1,0]

/** 单调栈问题
 *  注意点 需要把index放到stack中
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const results = Array.from(temperatures, () => 0);
  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const top = stack.pop();
      results[top] = i-top;
    }
    stack.push(i);
  }
  return results;
};
