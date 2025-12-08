// 这个题 和 39 组合总和的区别在于，可能存在重复的元素
// 重复元素就可能导致重复的组合
// 这种的解决思路是
// 1. 先给数组排序
// 2. 查看 如果 arr[i+1] === arr[i] 也就是相邻元素相等的情况下，那么可以直接忽略i+1的处理，因为i+1的处理结果 一定包含在 i 的处理结果中

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target,start = 0,currentResult = [],sum=0,results = []) {
    candidates.sort((a,b)=>a-b)
    return combinationSumImpl(candidates,target)
};

var combinationSumImpl = function(candidates, target,start = 0,currentResult = [],sum=0,results = []) {
    if(sum === target){
        /** 收集结果 */
        results.push(currentResult)
    }else if(sum > target){
        return 
    }else{
        for(let i=start;i<candidates.length;i++){
            if(i >= 1 && candidates[i] === candidates[i-1]) continue;
            combinationSumImpl(candidates,target,i,[...currentResult,candidates[i]],sum+candidates[i],results)
        }
    }

    return results
};
