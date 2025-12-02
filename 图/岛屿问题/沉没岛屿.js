// 输入示例：

// 4 5
// 1 1 0 0 0
// 1 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 1
// 输出示例：

// 1 1 0 0 0
// 1 1 0 0 0
// 0 0 0 0 0
// 0 0 0 1 1

const map = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

/** 定义四个方向 */
const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function isValid(map, x, y) {
  return x < map.length && x >= 0 && y >= 0 && y < map[x].length;
}

function dfs(map, i, j) {
  map[i][j] = 2;
  for (const direction of directions) {
    const next = [i + direction[0], j + direction[1]];
    if (isValid(map, next[0], next[1]) && map[next[0]][next[1]] === 1) {
      dfs(map, next[0], next[1]);
    }
  }
}

function sankIsland(map) {
  // 清除边界陆地
  for (let i = 0; i < map.length; i++) {
    // 左右边
    if (map[i][0] === 1) {
      dfs(map, i, 0);
    }

    if (map[i][map[0].length - 1] === 1) {
      dfs(map, i, map[0].length - 1);
    }
  }

  for (let i = 0; i < map[0].length; i++) {
    // 上下边
    if (map[0][i] === 1) {
      dfs(map, 0, i);
    }

    if (map[map.length - 1][i] === 1) {
      dfs(map, map.length - 1, i);
    }
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] > 0) {
        map[i][j]--;
      }
    }
  }
  return map;
}

console.log(sankIsland(map));
