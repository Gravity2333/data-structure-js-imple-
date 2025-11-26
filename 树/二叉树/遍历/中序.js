// 94.中序遍历
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
var inorderTraversal = function(root) {
    if(undefined === root || null === root) return []
    const stack = [root]
      let current = root
    const result = []
     while(stack.length > 0 ){
        if(current&&current?.left){
            current = current.left
            stack.push(current)
        }else{
            // 回溯
            current = stack.pop()
              while(current){
                result.push(current.val)
                if(current?.right){
                    current = current.right
                    break
                };
                current = stack.pop()
            }

                while(current&&!current.left){
                    result.push(current.val)
                    current = current.right
                }


                if(current?.left){
                    stack.push(current)
                }
        }
     }
    
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
var inorderTraversal = function(root) {
    if(!root) return []
    const res = []

    res.push(...inorderTraversal(root.left))
    res.push(root.val)
    res.push(...inorderTraversal(root.right))
    return res

};