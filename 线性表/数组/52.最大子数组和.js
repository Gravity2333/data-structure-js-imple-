/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 贪心
    let sum = 0
    let max = -Infinity
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        if(sum >= max){
            max =sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return max
};