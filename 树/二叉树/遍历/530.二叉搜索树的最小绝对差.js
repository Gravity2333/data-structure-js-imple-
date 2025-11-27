// 530.二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root,context = {
    minDiffVal: Number.MAX_VALUE,
    prev: null
}) {
    if(!root) return null

    getMinimumDifference(root.left,context)
    if(null === context.prev){
        context.prev = root.val
    }else{
        const maybeMin = Math.abs(root.val - context.prev)
        if(maybeMin < context.minDiffVal){
            context.minDiffVal = maybeMin
        }
        context.prev = root.val
    }
    getMinimumDifference(root.right,context)

    return context.minDiffVal
};