// 区分。排列 和 组合 
// 组合 按照题目给的顺序找一遍就行
// 排列 需要把同一组合的每种排列顺序都看一遍

// 本题方法 用一个 set 或者 visited数组 标记哪些元素已经被加入到结果中了
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums,currentResult = [],results=[]) {
    if(nums.length ===0){
        results.push(currentResult)
    }else{
        for(let i=0;i<nums.length;i++){
            if(nums[i] === null) continue
            const newNums = [...nums]
            newNums.splice(i,1)
            permute(newNums,[...currentResult,nums[i]],results)
        }
    }
    return results
};