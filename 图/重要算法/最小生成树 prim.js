// 在世界的某个区域，有一些分散的神秘岛屿，每个岛屿上都有一种珍稀的资源或者宝藏。国王打算在这些岛屿上建公路，方便运输。

// 不同岛屿之间，路途距离不同，国王希望你可以规划建公路的方案，如何可以以最短的总公路距离将所有岛屿联通起来。

// 给定一张地图，其中包括了所有的岛屿，以及它们之间的距离。以最小化公路建设长度，确保可以链接到所有岛屿。

// 输入描述：

// 第一行包含两个整数V和E，V代表顶点数，E代表边数。顶点编号是从1到V。例如：V=2，一个有两个顶点，分别是1和2。

// 接下来共有E行，每行三个整数v1，v2和val，v1和v2为边的起点和终点，val代表边的权值。

// 输出描述：

// 输出联通所有岛屿的最小路径总距离

// 输入示例：

// 7 11
// 1 2 1
// 1 3 1
// 1 5 2
// 2 6 1
// 2 4 2
// 2 3 2
// 3 4 1
// 4 5 1
// 5 6 2
// 5 7 1
// 6 7 1
// 输出示例：

// 7
// 第一行包含两个整数V和E，V代表顶点数，E代表边数。顶点编号是从1到V。例如：V=2，一个有两个顶点，分别是1和2。
// #

/** 邻接表 */
function prim(edges, nodeNum) {
  const adjacencyList = Array.from({ length: nodeNum + 1 }, () => []);
  for (const edge of edges) {
    const [from, to, dist] = edge;
    if (!adjacencyList[from]) {
      adjacencyList[from] = [];
    }
    adjacencyList[from].push({
      index: to,
      dist,
    });
  }
  let totalDist = 0;
  const distances = new Array(nodeNum + 1).fill(Infinity);
  const visited = new Array(nodeNum + 1).fill(false);
  let minTreeNodes = 1;
  let currCollectedNode = 1;
  distances[currCollectedNode] = 0;
  while (minTreeNodes < nodeNum) {
    /** 标记visited */
    visited[currCollectedNode] = true;
    /** 更新distances */
    for (let i = 0; i < adjacencyList[currCollectedNode].length; i++) {
      const { index, dist } = adjacencyList[currCollectedNode][i];
      if (visited[index]) continue;
      if (dist < distances[index]) {
        distances[index] = dist;
      }
    }

    /** 找到最近距离 */
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < distances.length; i++) {
      if (visited[i]) continue;
      if (distances[i] < min) {
        min = distances[i];
        minIndex = i;
      }
    }
    totalDist += min;
    currCollectedNode = minIndex;
    minTreeNodes++;
  }

  return totalDist;
}

prim(
  [
    [1, 2, 1],
    [1, 3, 1],
    [1, 5, 2],
    [2, 6, 1],
    [2, 4, 2],
    [2, 3, 2],
    [3, 4, 1],
    [4, 5, 1],
    [5, 6, 2],
    [5, 7, 1],
    [6, 7, 1],
  ],
  7
);
