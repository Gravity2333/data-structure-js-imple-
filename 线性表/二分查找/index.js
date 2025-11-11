// 704 二分搜索法

// 左闭右开
function search(nums,target){
    let left = 0
    let right = nums.length // 右开

    while(left < right){
        const mid = Math.trunc((left + right) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target){
           right = mid
        }else{
            left = mid + 1
        }
    }

    return -1
}


// 左闭右闭 坚持范围
function search2(nums,target){
    let left = 0
    let right = nums.length - 1 // 右闭

    while(left <= right){
        const mid = Math.trunc((left + right) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target){
           right = mid - 1
        }else{
            left = mid + 1
        }
    }

    return -1
}

