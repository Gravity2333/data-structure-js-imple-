/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function BalAndHeight(root){
    if(!root) return [true, 0]
    const [leftBal,leftHeight] = BalAndHeight(root.left)
    const [rightBal,rightHeight] = BalAndHeight(root.right)

    if(!leftBal || !rightBal) return [false,null]
    if(Math.abs(leftHeight-rightHeight) <= 1) return [true, Math.max(leftHeight,rightHeight)+1]
    return [false,null]
 }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var  isBalanced = function (root) {
    return BalAndHeight(root)[0]
};

function nodeBalance(node){
    if(!node) return {
        isBalance: true,
        depth: 0,
    }
    const leftInfo = nodeBalance(node.left)
    const rightInfo = nodeBalance(node.right)

    if(!leftInfo.isBalance ||!rightInfo.isBalance ) return {isBalance: false}

    if(Math.abs(leftInfo.depth-rightInfo.depth) > 1) return {isBalance: false}

    return {
        isBalance: true,
        depth: Math.max(leftInfo.depth,rightInfo.depth) + 1
    }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var  isBalanced = function (root) {
    return nodeBalance(root).isBalance
};