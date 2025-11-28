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

/** 查找冗余边 */
function findCircleEdge(nodeNum, edges) {
  const uf = new UnionFind();
  for (const edge of edges) {
    const [a, b] = edge;
    if (uf.connected(a, b)) {
      return edge;
    } else {
      uf.join(a, b);
    }
  }
  return undefined; // 没有环
}

/** 测试用例数组 */
const testCases = [
  // 原始示例
  {
    name: "示例1",
    nodeNum: 3,
    edges: [
      [1, 2],
      [2, 3],
      [1, 3],
    ],
    expected: [1, 3],
  },
  {
    name: "四个节点环",
    nodeNum: 4,
    edges: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1],
    ],
    expected: [4, 1],
  },
  {
    name: "无环",
    nodeNum: 3,
    edges: [
      [1, 2],
      [2, 3],
    ],
    expected: undefined,
  },
  {
    name: "冗余边中间",
    nodeNum: 4,
    edges: [
      [1, 2],
      [2, 3],
      [1, 3],
      [3, 4],
    ],
    expected: [1, 3],
  },

  // 新增复杂测试用例
  {
    name: "五节点环末尾",
    nodeNum: 5,
    edges: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 2], // 冗余边
    ],
    expected: [5, 2],
  },
  {
    name: "五节点环中间",
    nodeNum: 5,
    edges: [
      [1, 2],
      [2, 3],
      [3, 1], // 冗余边
      [3, 4],
      [4, 5],
    ],
    expected: [3, 1],
  },
  {
    name: "六节点环末尾",
    nodeNum: 6,
    edges: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3], // 冗余边
    ],
    expected: [6, 3],
  },
  {
    name: "六节点环中间",
    nodeNum: 6,
    edges: [
      [1, 2],
      [2, 3],
      [3, 1], // 冗余边
      [3, 4],
      [4, 5],
      [5, 6],
    ],
    expected: [3, 1],
  },
  {
    name: "七节点环末尾",
    nodeNum: 7,
    edges: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // 冗余边
    ],
    expected: [7, 4],
  },
  {
    name: "七节点环中间",
    nodeNum: 7,
    edges: [
      [1, 2],
      [2, 3],
      [3, 1], // 冗余边
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
    expected: [3, 1],
  },
];

/** 自动测试 */
for (const test of testCases) {
  const result = findCircleEdge(test.nodeNum, test.edges);
  const pass = JSON.stringify(result) === JSON.stringify(test.expected);
  console.log(`测试: ${test.name}`);
  console.log(`结果: ${result}`);
  console.log(`期望: ${test.expected}`);
  console.log(pass ? "✅ 测试通过\n" : "❌ 测试失败\n");
}
