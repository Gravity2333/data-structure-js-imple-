/** 考虑边界收缩
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0,
    top = 0;
  let right = matrix[0].length - 1,
    bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    let cache = [];
    for (let i = left; i <= right; i++) {
      cache.push(matrix[top][i]);
    }
    for (let i = top; i <= bottom; i++) {
      const tmp = cache[i];
      cache[i] = matrix[i][right];
      matrix[i][right] = tmp;
    }
    for (let i = left; i <= right; i++) {
      const tmp = cache[right - i];
      cache[right - i] = matrix[bottom][i];
      matrix[bottom][i] = tmp;
    }

    for (let i = top; i <= bottom; i++) {
      const tmp = cache[bottom - i];
      cache[bottom - i] = matrix[i][left];
      matrix[i][left] = tmp;
    }

    for (let i = left; i <= right; i++) {
      matrix[top][i] = cache[i];
    }
    left++;
    top++;
    right--;
    bottom--;
  }
};
