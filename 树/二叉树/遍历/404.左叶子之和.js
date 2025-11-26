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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    const leftSum = sumOfLeftLeaves(root.left)
    const rightSum = sumOfLeftLeaves(root.right)

    if(root?.left && !root?.left?.left&& !root?.left?.right){
        return leftSum + rightSum + root?.left?.val
    }

    return leftSum + rightSum
};


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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0

    if(root.left&& !root.left.left && !root.left.right){
       // root .left 为 叶子
       return root.left.val + sumOfLeftLeaves(root.right)
    }else{
       return  sumOfLeftLeaves(root.left)+ sumOfLeftLeaves(root.right)
    }
   
};