/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 层序遍历 找到最后一层即可
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return null;
  const queue = [root];
  let layerNum = 1;
  let result = [];

  while (queue.length > 0) {
    result = [];
    let currentChilds = 0;
    for (let i = 0; i < layerNum; i++) {
      const top = queue.shift();
      result.push(top.val);

      if (top.left) {
        currentChilds++;
        queue.push(top.left);
      }

      if (top.right) {
        currentChilds++;
        queue.push(top.right);
      }
    }
    layerNum = currentChilds;
  }
  return result.shift();
};
