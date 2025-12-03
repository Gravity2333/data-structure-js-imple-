// 2个字符串 相同字母 不用位置祖合而成
// abbc bbca

// 用hash表 记录每个字母出现的次数 看是否一样多
// 这里可以不用map 用一个26长度的数组即可

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const smap = new Array(26).fill(0)
    const tmap = new Array(26).fill(0)
    const startCharAscii = 'a'.charCodeAt()
    for(let i=0;i<s.length;i++){
        const c1 = s[i].charCodeAt()
        const c2 = t[i].charCodeAt()

        smap[c1-startCharAscii]++
        tmap[c2-startCharAscii]++
    }

    return smap.join('') === tmap.join('')
};