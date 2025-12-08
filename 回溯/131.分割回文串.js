/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s, currentResult = [], results = []) {
  if (s.length === 0) {
    results.push(currentResult);
  } else {
    /** 判断回文 */
    for (let i = 0; i < s.length; i++) {
      const substr = s.slice(0, i + 1);
      if (isPalindrome(substr)) {
        partition(s.slice(i + 1), [...currentResult, substr], results);
      }
    }
  }

  return results;
};

/** 判断回文 */
// 我们把每个字符的后面位置作为切分点，遍历每个切分点
// 如果当前切分出来的子串 0->切分点 是回文，那么继续查看剩余部分能不能切分成回文
// 当字符串长度为0 即 所有的部分都可以被分成回文串 收集
function isPalindrome(s) {
  if (!s) return true;
  /** 双指针 */
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
