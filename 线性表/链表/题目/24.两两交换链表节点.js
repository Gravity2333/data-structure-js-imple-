var swapPairs = function (head) {
  if (!head) return head;
  const vNode = {
    val: "v",
    next: head,
  };

  let slow = head;
  let fast = slow.next;

  while (fast) {
    const tmp = slow.val;
    slow.val = fast.val;
    fast.val = tmp;

    slow = fast.next;
    fast = slow?.next ;
  }

  return vNode.next;
};
