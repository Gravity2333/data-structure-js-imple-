// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次 
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, start = 1, currentResult = [], currentSum = 0 ,results = []) {
    if(currentResult.length ===k && currentSum === n){
        results.push(currentResult)
    }else{
        for(let i=start;i<=9;i++){
            combinationSum3(k,n,i+1,[...currentResult,i],currentSum+i,results)
        }
    }
    return results
};