// 654.最大二叉树

function getMaxIndex(nums){
    let max = -Number.MAX_VALUE
    let maxIndex = -1
    for(let i =0; i< nums.length;i++){
        if(nums[i] > max){
            max = nums[i]
            maxIndex = i
        }
    }
return maxIndex
}
/**
* @param {number[]} nums
* @return {TreeNode}
*/
var constructMaximumBinaryTree = function(nums, root = {val: void 0,left: null,right:null}) {
    if(nums.length === 0) return null
    const maxIndex = getMaxIndex(nums)
    root.val = nums[maxIndex]
    const leftNums = nums.slice(0,maxIndex)
    const rightNums = nums.slice(maxIndex+1)
    if(leftNums.length > 0 ){
        root.left = {val: void 0,left: null,right:null}
        constructMaximumBinaryTree(leftNums,root.left)
    }

    if(rightNums.length > 0 ){
        root.right= {val: void 0,left: null,right:null}
        constructMaximumBinaryTree(rightNums,root.right)
    }

    return root
};
