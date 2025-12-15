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

class UnionFind {
  constructor() {
    this.map = new Map();
  }

  add(x) {
    if (!this.map.has(x)) {
      this.map.set(x, x);
    }
  }

  find(x) {
    this.add(x);
    if (this.map.get(x) !== x) {
      this.map.set(x, this.find(this.map.get(x)));
    }
    return this.map.get(x);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  join(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX !== parentY) {
      this.map.set(parentX, parentY);
    }
  }
}

/** 邻接表 */
function kruscal(edges, nodeNum) {
  edges.sort((e1, e2) => e1[2] - e2[2]);
  const unionFind = new UnionFind()
  let totalDist = 0 
  for(const edge of edges){
    const [from,to,dist] =edge
    if(unionFind.connected(from,to)) continue;
    totalDist += dist
    unionFind.join(from,to)
  }
  return totalDist
}

kruscal(
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
