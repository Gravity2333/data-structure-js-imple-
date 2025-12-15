// 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。
// 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示 val 的绝对值。
// 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。

// 示例 1：
// 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// 输出：20
// 解释：
// 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20 。
// 注意到任意两个点之间只有唯一一条路径互相到达。

/** 计算曼哈顿距离 */
function countDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

/** Prim
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let power = 0;
  /** 距离生成树的最小距离 */
  const distance = new Array(points.length).fill(Infinity);
  /** 节点是否访问过 */
  const visited = new Array(points.length).fill(false);

  /** 从 points[0] 开始 */
  /** 已经收集的节点 */
  let colledPoints = 1;
  /** 当前正在收集的节点 */
  let currentCollectedNode = 0;
  distance[currentCollectedNode] = 0;

  while (colledPoints < points.length) {
    visited[currentCollectedNode] = true;
    /** 更新 distance */
    for (let i = 0; i < points.length; i++) {
      if (visited[i]) continue;
      const dist = countDistance(points[currentCollectedNode], points[i]);
      distance[i] = Math.min(dist, distance[i]);
    }

    /** 寻找距离生成树最近的节点 */
    let minIndex = -1;
    let min = Infinity;
    for (let i = 0; i < distance.length; i++) {
      if (visited[i] || distance[i] === Infinity) continue;
      if (distance[i] < min) {
        min = distance[i];
        minIndex = i;
      }
    }
    power += distance[minIndex];
    colledPoints++;
    currentCollectedNode = minIndex;
  }

  return power;
};

/** kruscal */
class UnionFind {
  constructor() {
    this.map = new Map();
  }

  /** 添加元素 */
  add(x) {
    if (!this.map.has(x)) {
      this.map.set(x, x);
    }
  }

  /** 查找元素的parent */
  find(x) {
    this.add(x);
    if (this.map.get(x) !== x) {
      this.map.set(x, /** 再次find(parent) */ this.find(this.map.get(x)));
    }
    return this.map.get(x);
  }

  /** 是否在一个集合内 */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  /** 加入 */
  join(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);

    if (parentX !== parentY) {
      this.map.set(parentX, parentY);
    }
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  /** 构建所有边 */
  const edges = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      edges.push([i, j, countDistance(points[i], points[j])]);
    }
  }

  /** 边排序 */
  edges.sort((e1, e2) => e1[2] - e2[2]);
  const unionFind = new UnionFind();
  let totalDist = 0;
  for (const edge of edges) {
    const [from, to, dist] = edge;
    if (unionFind.connected(from, to)) continue;
    unionFind.join(from, to);
    totalDist += dist;
  }
  return totalDist;
};
