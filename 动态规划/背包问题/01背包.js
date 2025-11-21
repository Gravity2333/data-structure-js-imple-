// n = 3
// W = 4
// weights = [2, 1, 3]
// values  = [4, 2, 3]
// 解释：
// 容量 4

// 三个物品：

// 物品1：重量2，价值4

// 物品2：重量1，价值2

// 物品3：重量3，价值3

// 输出：
// Copy code
// 最大价值 = 6
// 选择物品 = {1, 2}

// 输入：
// n = 5
// W = 10
// weights = [2, 2, 6, 5, 4]
// values  = [6, 3, 5, 4, 6]

// 输出：
// 最大价值 = 15
// 选择物品 = {1, 4, 5}

function maxPackageValue(packageWeiget, weights, values) {
  const dp = Array.from({ length: weights.length }, () =>
    new Array(packageWeiget + 1).fill(0)
  );

  // 处理 第一行 选第一个物品
  for (let i = weights[0]; i <= packageWeiget; i++) {
    dp[0][i] = values[0];
  }

  // 2层循环 填写表格
  // 物品
  for (let i = 1; i < weights.length; i++) {
    for (let j = 0; j <= packageWeiget; j++) {
      if (weights[i] > j) {
        // 装不下 那么只有不选
        dp[i][j] = dp[i - 1][j];
      } else {
        // 装得下 分2种情况
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i] + dp[i - 1][j - weights[i]]
        );
      }
    }
  }

  return dp[weights.length - 1][packageWeiget];
}

console.log(maxPackageValue(4, [2, 1, 3], [4, 2, 3])); //6
console.log(maxPackageValue(10, [2, 2, 6, 5, 4], [6, 3, 5, 4, 6])); // 15
