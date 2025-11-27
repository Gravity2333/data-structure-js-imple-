// 501.二叉搜索树中的众数
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
var findMode = function(root,context = {
    results: [],
    prev: null,
    maxCnt: 0,
    cnt: 0,
    firstLayer: true,
}) {
    const firstLayer = context.firstLayer
    context.firstLayer = false

    function checkMode(){
            if(context.cnt > context.maxCnt){
                context.maxCnt = context.cnt
                context.result = [context.prev]
            }else if(context.cnt === context.maxCnt){
                context.result.push(context.prev)
            }
    }

    if(!root){
        return []
    }
    findMode(root.left,context)
    if(null === context.prev){
        context.prev = root.val
        context.cnt = 1
    }else{
        if(context.prev === root.val){
            context.cnt++
        }else{
            checkMode()
            context.cnt= 1
            context.prev = root.val
        }
    }
    findMode(root.right,context)
    if(firstLayer){
      checkMode()
    }
    return context.result
};