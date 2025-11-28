/** 实现并查集 */
class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
  }

  /** 添加元素 */
  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
      this.rank.set(x, 1);
    }
  }

  /** find 查找根节点 */
  find(x) {
    this.add(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.parent.get(x));
    }
    return this.parent.get(x);
  }

  join(a, b) {
    const parentA = this.find(a);
    const parentB = this.find(b);

    if (parentA !== parentB) {
      const rankA = this.rank.get(a);
      const rankB = this.rank.get(b);

      if (rankA >= rankB) {
        this.parent.set(parentB, parentA);
        this.rank.set(rankA, this.rank.get(rankA) + this.rank.get(rankB));
      } else {
        this.parent.set(parentA, parentB);
        this.rank.set(rankB, this.rank.get(rankA) + this.rank.get(rankB));
      }
    }
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
