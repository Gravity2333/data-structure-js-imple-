/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return insert(nums)
};

function swap(nums,i,j){
if(i ===j)return nums
    nums[j] = nums[j]+ nums[i]
    nums[i] = nums[j] - nums[i]
    nums[j] = nums[j] - nums[i]
    return nums
}

function bubble(nums){
for(let i =0;i<nums.length ; i++){
    for(let j=0;j<nums.length - i - 1;j++){
        if(nums[j]> nums[j+1]){
           swap(nums,j,j+1)
        }
    }
}
return nums
}

function select(nums){
for(let i = 0 ; i<nums.length ; i++){
    let min = Number.MAX_VALUE
    let minIndex = -1
    for(let j = i;j<nums.length;j++){
        if(nums[j] < min){
            min = nums[j]
            minIndex = j 
        }
    }
    swap(nums,i,minIndex)
}
return nums
}

function insert(nums){
for(let i = 1;i<nums.length ; i++){
    const tmp = nums[i]
    for(let j=i - 1;j>=0;j--){
        if(nums[j] > tmp){
            nums[j+1] = nums[j]
        }else{
            nums[j+1] =tmp
            break
        }

        if(0 === j){
            nums[0] = tmp
        }
    }
}
return nums
}