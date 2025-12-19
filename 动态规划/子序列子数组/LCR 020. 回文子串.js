// 给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

// 示例 1：

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

/** 理解 dp问题
 * dp 项含义 从 i -> j的子串 包含dp[i][j] 回文子串
 * dp[i][j] = i ===j ? dp[i-1][j-1] + 1 : dp[i+1][j] + dp[i][j-1]
 * 多设置一行 空串的情况  dp[0][0] = 1   三个方向了 没法求？？
 */

/**
 *  i j 表示 i-j的字符串 是回文 dp[i][j]
 * dp[i][j] = nums[i] === nums[j] ? dp[i+1][j-j] : false
 * 先看顺序
 *   1. 只有 i<=j 才有意义，所以dp数组我们只看上半部分
 *   2. i 依赖 i+1 所以 i 要从 len -> 0
 *      j 依赖 j - 1 所以 j 要从 i -> len
 * 初始化 i == j 且 nums[i] === nums[j] 此时 true
 *           i + 1 = j 此时 true
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false)
  );
  let cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j <= s.length-1; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        if (dp[i][j]) {
          cnt++;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }
  return cnt;
};