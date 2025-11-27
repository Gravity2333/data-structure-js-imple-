/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right){
        if(targetSum - root.val === 0 ){
            return true
        }else{
            return false
        }
    }else{
        const leftHasSum = hasPathSum(root.left,targetSum - root.val)
        const rightHasSum = hasPathSum(root.right,targetSum - root.val)

        if(leftHasSum || rightHasSum){
            return true
        }else{
            return false
        }
    }
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
  if(!root.left&&!root.right){
    if(targetSum-root.val ===0) return true
    return false
  }else{
    const leftHasSum = hasPathSum(root.left,targetSum-root.val)
    const rightHasSum = hasPathSum(root.right,targetSum-root.val)
    return leftHasSum || rightHasSum
  }
};