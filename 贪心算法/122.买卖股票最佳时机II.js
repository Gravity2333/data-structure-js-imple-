/** 本题正统解法 dp
 *  由于可以多次买卖，本题也可以采用贪心策略 即 只要有收益，就存入sum
 */


/**
 * 两种解决办法
 * 1. 贪心算法
 * 由于求的是多次买卖之后的总收益，我们可以考虑
 * 计算每2天买入 卖出的差值
 * 从头开始计算，如果有正向收益 就累加，如果没有 就跳过
 *
 * 注意 只有股票2 可以用贪心 因为可以多次买卖
 *
 * 2. 动态规划 正统解法
 * 和1 的区别仅仅在，可以多次买卖，也就是每次买入的时候 不能用 0 - price[i] 而是在上一天不持有的基础上 - proce[i]
 * 所以 我们定义dp项的含义
 * 第 i 天 持有，不持有股票的最大收益为 dp[i][[持有，不持有]]
 * 递推公式：
 * dp[i][0] = max( 保持持有： dp[i-1][0] , 第i天买入 dp[i-1][1] - (-price[i]))
 * dp[i][1] = max( 保持不持有: dp[i-1][1], 第i天卖出 dp[i-1][0] + price[i] )
 *
 * 初始化 dp[0] = [-price[0],0] 第一天买入的情况
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let income = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentIncome = prices[i] - prices[i - 1];
    if (prices[i] - prices[i - 1] > 0) {
      income += currentIncome;
    }
  }
  return income;
};

/** 方法2 dp */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /** 0 持有 1 不持有 */
  const dp = Array.from({ length: prices.length }, () => [0, 0]);
  /** 初始化 第一天买入的情况 */
  dp[0] = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    /** 第 i 天持有 */
    dp[i][0] = Math.max(
      /** i-1天 持有 */
      dp[i - 1][0],
      /** i-1天不持有 i天买入 */
      dp[i - 1][1] - prices[i]
    );

    /** 第 i 天不持有 */
    dp[i][1] = Math.max(
      /** i-1 天不持有 */
      dp[i - 1][1],
      /** i-1天持有 i天卖出 */
      dp[i - 1][0] + prices[i]
    );
  }

  return Math.max(...dp.pop());
};


/** 
 * 贪心 由于可以多次买卖，本题也可以采用贪心策略 即 只要有收益，就存入sum
 */
var maxProfit = function (prices) {
  let maxIncome = 0
  for(let i=1;i<prices.length;i++){
    const currentIncome = prices[i] -prices[i-1]
    if(currentIncome > 0 ){
        maxIncome +=currentIncome
    }
  }
  return maxIncome
};