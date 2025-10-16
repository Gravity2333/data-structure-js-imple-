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

function traverse(root) {
  let n = root;
  while (n !== null) {
    console.log(n.value);
    n = n.next;
  }
}

function recursionTraverse(node){
    if(node === null) return
    console.log(node.value)
    recursionTraverse(node.next)
}
recursionTraverse(root)
traverse(root);
