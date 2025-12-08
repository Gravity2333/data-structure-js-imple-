// 注意！ 由于元素可以重复被使用，画出来的树是
//    2.    3.      5.    
// 235 235 35 35. 5 5
// 235 235 ....
// 可能无限，所以我们就需要限制其结束条件为
// 1. 要么等于目标值，那么这条路径就不能妄下了
// 2. 要么 > 目标值 那么这条路径也不往下了

// 注意 这道题必须加上 sum > target的约束条件，因为可以重复利用元素的情况下，可能导致无限使用某个元素 造成无限递归

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target,start = 0,currentResult = [],sum=0,results = []) {
    if(sum === target){
        /** 收集结果 */
        results.push(currentResult)
    }else if(sum > target){
        return 
    }else{
        for(let i=start;i<candidates.length;i++){
            combinationSum(candidates,target,i,[...currentResult,candidates[i]],sum+candidates[i],results)
        }
    }

    return results
};