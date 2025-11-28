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
// 6
const edges = [
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
];

/** 并查集实现 */
class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
  }

  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
      this.rank.set(x, 1);
    }
  }

  find(x) {
    this.add(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  join(a, b) {
    const parentA = this.find(a);
    const parentB = this.find(b);

    if (parentA !== parentB) {
      const rankA = this.rank.get(parentA);
      const rankB = this.rank.get(parentB);

      if (rankA >= rankB) {
        this.parent.set(parentB, parentA);
        this.rank.set(parentA, rankA + rankB);
      } else {
        this.parent.set(parentA, parentB);
        this.rank.set(parentB, rankA + rankB);
      }
    }
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

function buildEmptyGrid(nodeNum) {
  const result = Array.from({ length: nodeNum + 1 }, () =>
    new Array(nodeNum + 1).fill(Infinity)
  );
  for (let i = 0; i < result.length; i++) {
    result[i][i] = 0;
  }
  return result;
}

function sortEdges(edges) {
  const sortedEdges = [...edges];
  sortedEdges.sort((edge1, edge2) => edge1[2] - edge2[2]);
  return sortedEdges;
}

function kruscal(edges, nodeNum) {
  const sortedEdges = sortEdges(edges);
  const result = buildEmptyGrid(nodeNum);
  let power = 0;
  const uf = new UnionFind();

  for (const sortedEdge of sortedEdges) {
    const [node1, node2, edgePower] = sortedEdge;
    if (uf.connected(node1, node2)) break;
    uf.join(node1, node2);
    result[node2][node1] = result[node1][node2] = edgePower;
    power += edgePower;
  }

  return [result, power];
}

console.log(kruscal(edges, 7));
