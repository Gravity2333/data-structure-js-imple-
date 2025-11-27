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
var findBottomLeftValue = function(node,currentLayer = 1, currentMax = {
    node,
    layer: 1
}) {
    if(!node) return node
    if(!node.left && !node.right){
        if(currentLayer > currentMax.layer){
            currentMax.node = node
            currentMax.layer = currentLayer
        }
    }else{
        findBottomLeftValue(node.left,currentLayer+1,currentMax)
         findBottomLeftValue(node.right,currentLayer+1,currentMax)
    }
    return currentMax?.node?.val
}

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
var findBottomLeftValue = function(node) {
    // 层序方式
       const queue = [node]
       const result = [] 
   
       let layerLen = 1
   
       while(queue.length > 0){
           let currentLayerLen = 0
           const layerResult = []
           for(let i=0;i< layerLen;i++){
               const node = queue.shift()
               layerResult.push(node.val)
   
               if(node.left){
                   queue.push(node.left)
                   currentLayerLen++
               }
   
               if(node.right){
                   queue.push(node.right)
                   currentLayerLen++
               }
           }
           layerLen = currentLayerLen
           result.push(layerResult)
       }
   
       return result?.pop()?.[0]
   }


   var findBottomLeftValue = function(node,layer=0,context = {
    maxLayer:0,
    node
}) {
    if(!node) return node
    if(!node.left&&!node.right){
        if(layer > context.maxLayer){
            context.maxLayer = layer
            context.node = node
        }
    }else{
        findBottomLeftValue(node.left,layer+1,context)
        findBottomLeftValue(node.right,layer+1,context)
    }

    return context.node?.val
}