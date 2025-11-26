// 145.后序遍历
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
var postorderTraversal = function(root) {
    if(undefined === root || null === root) return []
     const stack = []
     let current = root
     const result = []
     do{
         while(current){
             stack.push(current)
             current = current.left
         }
 
             // 回溯
              current = stack.pop()
              let prev = current
               while(current){
                 if(current?.right&&current?.right !== prev){
                             stack.push(current)
                     current = current.right
                     break
                 };
                 result.push(current.val)
                 prev = current
                 current = stack.pop()
             }
 
                 while(current){
                     stack.push(current)
                     if(current.left){
                         current = current.left
                         break;
                     }
                     current = current.right
                 }
      } while(stack.length > 0)
     
     return result
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
     const res = []
     res.push(...postorderTraversal(root.left))
     res.push(...postorderTraversal(root.right))
     res.push(root.val)
     return res
 };