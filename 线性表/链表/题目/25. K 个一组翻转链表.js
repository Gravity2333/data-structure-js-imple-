/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function canReverse(head, k) {
  let cnt = 0;
  while (cnt < k) {
    if (!head) return false;
    head = head.next;
    cnt++;
  }
  return true;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let virtualHead = { next: head };
  let currentStartNode = head;
  let prevStart = virtualHead;
  while (canReverse(currentStartNode, k, prevStart)) {
    // reverse
    let currentNode = currentStartNode;
    let next = currentNode.next;
    let cnt = 0;
    while (cnt < k - 1) {
      const tmp = next.next;
      next.next = currentNode;
      currentNode = next;
      next = tmp;
      cnt++;
    }
    prevStart.next = currentNode;
    prevStart = currentStartNode;
    currentStartNode = currentStartNode.next = next;
  }

  return virtualHead.next;
};
