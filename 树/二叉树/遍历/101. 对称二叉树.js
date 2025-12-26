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


// 两个节点是否对称
// 1 两个节点都是 空 ✅
// 一个节点为空 ❌
// 两个节点相等  并且 left.left === right.right left.right === right.left

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    function compare(left,right){
        if(!left && ! right)return true
        if(!left && right || left && !right) return false;
        if(left.val !== right.val) return false

        return compare(left.left,right.right) && compare(left.right,right.left)
    }
    return compare(root.left,root.right)
};