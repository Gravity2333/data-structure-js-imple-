// 102.二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  let layerNum = 1; // 默认第一层 1一个
  const queue = [root];

  while (queue.length > 0) {
    let childCnt = 0;
    const layerRes = [];
    for (let i = 0; i < layerNum; i++) {
      const current = queue.shift();
      if (!current) break;
      layerRes.push(current.val);
      if (current.left) {
        childCnt++;
        queue.push(current.left);
      }
      if (current.right) {
        childCnt++;
        queue.push(current.right);
      }
    }
    layerNum = childCnt;
    if (layerRes.length > 0) {
      result.push(layerRes);
    }
  }

  return result;
};


// 不需要把每一层都封装
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const result = []
    const queue = [root]
    let layerCnt = 1

    while(queue.length > 0 ){
        const node = queue.shift()
        result.push(node.val)

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return result
};

// 把每一层都封装
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const result = []
    const queue = [root]
    let layerCnt = 1

    while(queue.length > 0 ){
        let childCnt = 0
        let layerResult = []
        for(let i =0;i<layerCnt;i++){
            const node = queue.shift()
            layerResult.push(node.val)
            if(node.left ){
                queue.push(node.left)
                childCnt++
            }
             if(node.right ){
              queue.push(node.right)
                childCnt++
            }
        }
        layerCnt = childCnt
        result.push(layerResult)
    }

    return result
};