/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const pos = [0, matrix[0].length - 1];
  while (pos[0] < matrix.length && pos[1] >= 0) {
    if (matrix[pos[0]][pos[1]] === target) return true;
    else if (matrix[pos[0]][pos[1]] > target) {
      pos[1]--;
    } else {
      pos[0]++;
    }
  }
  return false;
};
