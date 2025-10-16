function createNode(value) {
  return {
    value,
    next: null,
  };
}

const root = createNode(1);
const node2 = (root.next = createNode(2));
const node3 = (node2.next = createNode(3));
const node4 = (node3.next = createNode(4));
const node5 = (node4.next = createNode(5));

function reverse(root) {
  if (root.next.next === null) {
    root.next.next = root;
    return root.next;
  } else {
    // 先处理后面的
    const result = reverse(root.next);
    // 处理本节点
    root.next.next = root;
    root.next = null
    return result;
  }
}
function traverse(root) {
  let n = root;
  while (n !== null) {
    console.log(n.value);
    n = n.next;
  }
}
traverse(root);
traverse(reverse(root));
