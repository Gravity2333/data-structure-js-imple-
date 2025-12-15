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
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const unionFind = new UnionFind();
  for (const edge of edges) {
    const [from, to] = edge;
    unionFind.join(from, to);
  }
  return unionFind.connected(source, destination);
};
