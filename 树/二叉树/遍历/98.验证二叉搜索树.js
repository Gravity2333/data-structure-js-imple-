// 98.验证二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function InOrder(root){
    if(!root) return []
    return [...InOrder(root.left),root.val,...InOrder(root.right)]
 }

 function isArrAsc(arr){
    if(arr.length === 0) return true
    let prev = -Number.MAX_VALUE
    for(let i=0;i<arr.length;i++){
        if(arr[i] > prev){
            prev = arr[i]
        }else{
            return false
        }
    }
    return true
 }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isArrAsc(InOrder(root))
};
