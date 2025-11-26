// 144.二叉树前序遍历

// 非递归
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(undefined === root || null === root) return []
     const stack = []
       let current = root
     const result = []
     do{
         while(current){
             stack.push(current)
             result.push(current.val)
             current = current.left
         }
 
             // 回溯
              current = stack.pop()
               while(current){
                 if(current?.right){
                     current = current.right
                     break
                 };
                 current = stack.pop()
             }
 
                 while(current){
                     result.push(current.val)
                     if(current.left){
                         stack.push(current)
                         current = current.left
                         break;
                     }
                     current = current.right
                 }
      } while(stack.length > 0)
     
     return result
 };

 // 递归
 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    const res = [root.val]
    res.push(...preorderTraversal(root.left))
    res.push(...preorderTraversal(root.right))
  
    return res
  };