function getNext(s) {
  const next = new Array(s.length).fill(0); // 初始化 next数组 ， next[0]默认为 0
  let j = 0; // 当前匹配到的前缀长度 （s[j] 为当前匹配到的前缀 后一个元素）
  // 当前计算到next数组的位置 0-j 个 元素的前缀 和 i-j -> i 的后缀 是匹配的
  for (let i = 1; i < s.length; i++) {
    /** 不相等 说明当前已经匹配前缀不能扩展，需要i向前找 */
    // xxxxxab c  xxxxxxxxxxxxxxxxxab e
    //   <--   j                      i
    // abfxxab c  xxxxxxxxxxxxxxxxxab e
    //   j                            i
    while (j > 0 && s[j] !== s[i]) {
      j = next[j - 1];
    }

    if (s[j] === s[i]) {
      j++;
    }

    next[i] = j;
  }

  return next;
}

function strStr(s, needle) {
  let i = 0;
  let j = 0;
  const next = getNext(needle);
  while (i < s.length) {
    if (s[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - needle.length + 1;
      }
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = next[j - 1];
      }
    }
  }

  return -1;
}

console.log(strStr("aabaabaaf", "aabaaf"));
