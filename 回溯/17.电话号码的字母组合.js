// 一边生成 一边减小digits长度

const keyboards = [
  [], // 0
  [], // 1
  ['a', 'b', 'c'],       // 2
  ['d', 'e', 'f'],       // 3
  ['g', 'h', 'i'],       // 4
  ['j', 'k', 'l'],       // 5
  ['m', 'n', 'o'],       // 6
  ['p', 'q', 'r', 's'],  // 7
  ['t', 'u', 'v'],       // 8
  ['w', 'x', 'y', 'z'],  // 9
];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, targenLen = digits.length ,prefix = "" ,results = []) {
    if(targenLen === prefix.length){
        results.push(prefix)
    }else{
        for(let i=0;i<digits.length;i++){
           for(let letter of keyboards[+digits[i]]){
             letterCombinations(digits.slice(i+1),targenLen,prefix+letter,results)
           }
        }
    }
    return results
};