/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function compare(left,right){
    if(!left&&!right) return true
    if(left&&!right || right&&!left) return false
    if(left.val !== right.val) return false
    let leftLeftEqual = compare(left.left,right.right)
    let rightLeftEqual = compare(left.right,right.left)

    return leftLeftEqual && rightLeftEqual
 }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return root
    return compare(root.left,root.right)
};