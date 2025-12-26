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
var findMode = function (
  root,
  context = {
    results: [],
    prev: null,
    maxCnt: 1,
    cnt: 0,
    firstLayer: true,
  }
) {
  const firstLayer = context.firstLayer;
  context.firstLayer = false;

  function checkMode() {
    if (context.cnt > context.maxCnt) {
      context.maxCnt = context.cnt;
      context.result = [context.prev];
    } else if (context.cnt === context.maxCnt) {
      context.result.push(context.prev);
    }
  }

  if (!root) {
    return [];
  }
  findMode(root.left, context);
  if (null === context.prev) {
    context.prev = root.val;
    context.cnt = 1;
  } else {
    if (context.prev === root.val) {
      context.cnt++;
    } else {
      checkMode();
      context.cnt = 1;
      context.prev = root.val;
    }
  }
  findMode(root.right, context);
  if (firstLayer) {
    checkMode();
  }
  return context.result;
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
var findMode = function (
  root,
  context = {
    prev: null,
    curr: null,
    max: 0,
    currentCnt: 0,
    results: [],
    currValue: null,
  }
) {
  if (!root) return context.results;
  findMode(root.left, context);
  /** 处理逻辑 */
  if (null === context.prev) {
    context.prev = root.val;
    context.currentCnt = 1;
  } else {
    context.prev = context.curr;
    context.curr = root.val;
  }

  if (context.prev === context.curr) {
    context.currentCnt++;
  } else {
    context.currValue = root.val;
    if (context.currentCnt > context.max) {
      context.max = context.currentCnt;
      context.currentCnt = 0;
      if (context.prev !== null) {
        context.results = [context.prev];
      }
    } else if (context.currentCnt === context.max) {
      context.currentCnt = 0;
      if (context.prev !== null) {
        context.results.push(context.prev);
      }
    }
  }

  findMode(root.right, context);
  if (context.currentCnt > context.max) {
    context.max = context.currentCnt;
    context.currentCnt = 0;
    if (context.prev !== null) {
      context.results = [context.prev];
    }
  } else if (context.currentCnt === context.max) {
    context.currentCnt = 0;
    if (context.prev !== null) {
      context.results.push(context.prev);
    }
  }

  return context.results;
};
