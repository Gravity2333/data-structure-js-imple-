// 在 78题的基础上 加入判断重复的逻辑

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
   return subsetsWithDupImpl(nums)
};

var subsetsWithDupImpl = function(nums,currentResult = [],results = [[]]) {
    if(nums.length ===0 )return
    for(let i=0;i<nums.length;i++){
        if(i > 0 && nums[i-1] === nums[i]) continue
        const current = [...currentResult,nums[i]]
        results.push(current)
        subsetsWithDupImpl(nums.slice(i+1),current,results)
    }
    return results
};