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
var maxDepth = function(root) {
    // let max = 1
    // function getMax(root,currentLevel = 1){
    //     if(!root) return
    //     max= Math.max(max,currentLevel)
    //     getMax(root.left,currentLevel+1)
    //     getMax(root.right,currentLevel+1)
    // }
    // getMax(root,1)
    // return max

    if(!root){
        return 0
    }
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
};