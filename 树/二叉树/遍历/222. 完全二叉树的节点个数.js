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
var countNodes = function(root) {
    if(!root) return 0
    let leftDepth = 0
    let rightDepth = 0

    let leftPtr = root
    let rightPtr = root

    while(leftPtr){
        leftDepth++
        leftPtr = leftPtr.left
    }

    let rightPrev = root
    while(rightPtr){
        rightPrev = rightPtr
        rightPtr = rightPtr.right
        rightDepth++
    }

    if(leftDepth === rightDepth){
        return Math.pow(2,leftDepth) - 1
    }else{
        if(rightPrev.left && !rightPrev.right){
            return Math.pow(2,leftDepth) - 2
        }else{
            return 1 + countNodes(root.left) + countNodes(root.right)
        }
    }
};