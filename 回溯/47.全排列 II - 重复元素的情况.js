// 和 46题的区别就在于 这个给的nums中可能有重复数字，这种情况就需要
// 先排序nums
// 查看 nums[i] === nums[i-1] 忽略

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b)
    return permuteUniqueImpl(nums)
};

var permuteUniqueImpl = function(nums,currentResult =[],results =[]) {
    if(nums.length ===0){
        results.push(currentResult)
    }else{
        for(let i=0;i<nums.length;i++){
            if(i>=1&&nums[i] === nums[i-1]) continue
            const newNums = [...nums]
            newNums.splice(i,1)
            permuteUniqueImpl(newNums,[...currentResult,nums[i]],results)
        }
    }
    return results
};