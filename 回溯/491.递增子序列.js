/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums, currentResult = [], results = []) {
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      let prev = i - 1;
      while (prev >= 0 && nums[prev] !== nums[i]) {
        prev--;
      }
      if (prev >= 0) {
        continue;
      }
    }
    let nextResult = [...currentResult];
    if (
      nextResult.length === 0 ||
      nextResult[nextResult.length - 1] <= nums[i]
    ) {
      nextResult.push(nums[i]);
      if (nextResult?.length > 1) {
        results.push(nextResult);
      }
    }
    findSubsequences(nums.slice(i + 1), nextResult, results);
  }
  return results;
};

function isAsc(arr){
    if(arr.length <= 1) return false
    let max = -Number.MAX_VALUE
    for(let i of arr){
        if(i >= max){
            max = i
        }else{
            return false
        }
    }
    return true
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums, currentResult = [], results = []) {
        if(isAsc(currentResult)){
        results.push(currentResult)
    }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      let prev = i - 1;
      while (prev >= 0 && nums[prev] !== nums[i]) {
        prev--;
      }
      if (prev >= 0) {
        continue;
      }
    }
   findSubsequences(nums.slice(i+1),[...currentResult,nums[i]],results)
  }
  return results;
};
