// 输入示例：

// 5 4
// 0 1
// 0 2
// 1 3
// 2 4
// 输出示例：

// 0 1 2 3 4

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];

function init(edges) {
  const indegreeMap = new Map();
  const neighborMap = new Map();

  for (const egde of edges) {
    const [from, to] = egde;
    indegreeMap.set(to, (indegreeMap.get(to) || 0) + 1);
    indegreeMap.set(from, (indegreeMap.get(from) || 0));
    neighborMap.set(from, [...(neighborMap.get(from) || []), to]);
  }

  return [indegreeMap, neighborMap];
}
// console.log(init(edges))

function TopologicalSort(edges) {
  const [indegreeMap, neighborMap] = init(edges);
  const queue = [];
  const result = [];

  // 寻找第一个 入度为0的开始i节点
  for (const i of indegreeMap.keys()) {
    if (indegreeMap.get(i) === 0) {
      queue.push(i);
      break;
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node); // collect
    // 删除掉入度
    const neighbors = neighborMap.get(node);
    for (const neighbor of neighbors || []) {
      indegreeMap.set(neighbor, indegreeMap.get(neighbor) - 1);
      if( indegreeMap.get(neighbor) === 0){
        queue.push(neighbor)
      }
    }
  }

  if (result.length !== indegreeMap.size) return -1; // 环
  return result;
}

console.log(TopologicalSort(edges));
