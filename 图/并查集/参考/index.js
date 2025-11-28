class UnionFind {
  constructor() {
    this.parent = new Map();  // 记录父节点
    this.rank = new Map();    // 按秩优化，可选
  }

  // 初始化一个元素（如果从未出现）
  makeSet(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
      this.rank.set(x, 1);
    }
  }

  // 查找根节点（带路径压缩）
  find(x) {
    this.makeSet(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x))); // 路径压缩
    }
    return this.parent.get(x);
  }

  // 合并
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;

    // 按秩合并
    if (this.rank.get(rootX) < this.rank.get(rootY)) {
      this.parent.set(rootX, rootY);
    } else if (this.rank.get(rootX) > this.rank.get(rootY)) {
      this.parent.set(rootY, rootX);
    } else {
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, this.rank.get(rootX) + 1);
    }
  }

  // 判断是否连通
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
