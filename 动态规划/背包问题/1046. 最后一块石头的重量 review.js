class MyPriorityQueue1 {
  constructor(initialValues) {
    this.list = [];
    this.size = 0;

    initialValues.forEach(this.push.bind(this))
  }

  swap(x, y) {
    const tmp = this.list[x];
    this.list[x] = this.list[y];
    this.list[y] = tmp;
  }

  push(x) {
    this.list.push(x);
    this.size++;
    this.shiftUp(this.size - 1);
  }

  pop() {
    this.swap(0, this.size - 1);
    const res = this.list.pop();
    this.size--;
    this.shiftDown(0);
    return res;
  }

  peak() {
    return this.list[0];
  }

  shiftUp(index) {
    let current = index;
    let parent = Math.trunc(index / 2);
    if (this.list[parent] < this.list[current]) {
      this.swap(current, parent);
      this.shiftUp(parent);
    }
  }

  shiftDown(index) {
    let current = index;
    let leftChild = 2 * current;
    let rightChild = leftChild + 1;

    let max = this.list[current];
    let maxIndex = current;

    if (leftChild < this.size) {
      max = Math.max(this.list[maxIndex], this.list[leftChild]);
      maxIndex = max === this.list[maxIndex] ? maxIndex : leftChild;
    }

    if (rightChild < this.size) {
      max = Math.max(this.list[maxIndex], this.list[rightChild]);
      maxIndex = max === this.list[maxIndex] ? maxIndex : rightChild;
    }

    if (maxIndex !== current) {
      this.swap(maxIndex, current);
      this.shiftDown(maxIndex);
    }
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /** 构造小顶堆 */
  const priorityQueue = new MyPriorityQueue1(stones);

  while (priorityQueue.size > 1) {
    const stone1 = priorityQueue.pop();
    const stone2 = priorityQueue.pop();
    priorityQueue.push(Math.abs(stone1 - stone2));
  }

  return priorityQueue.pop();
};
