/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var splitLink = function (head) {
  let slow = head;
  let fast = head;
  let slowPrev = head;

  while (fast !== null) {
    fast = fast?.next;
    if (fast) {
      fast = fast?.next;
    }
    slowPrev = slow;
    slow = slow.next;
  }

  // cut
  slowPrev.next = null;

  return [head, slow];
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null;
  if (head.next === null) return head;

  /** 找到中间节点 */
  const [leftHead, rightHead] = splitLink(head);
  const sortedLeft = sortList(leftHead);
  const sortedRight = sortList(rightHead);

  const newHead = { val: "VIRTUAL", next: null };
  let currentResult = newHead;
  let currentLeft = sortedLeft;
  let currentRight = sortedRight;

  while (currentLeft && currentRight) {
    if (currentLeft.val <= currentRight.val) {
      currentResult = currentResult.next = {
        val: currentLeft.val,
        next: null,
      };
      currentLeft = currentLeft.next;
    } else {
      currentResult = currentResult.next = {
        val: currentRight.val,
        next: null,
      };
      currentRight = currentRight.next;
    }
  }

  while (currentLeft) {
    currentResult = currentResult.next = {
      val: currentLeft.val,
      next: null,
    };
    currentLeft = currentLeft.next;
  }

  while (currentRight) {
    currentResult = currentResult.next = {
      val: currentRight.val,
      next: null,
    };
    currentRight = currentRight.next;
  }

  return newHead.next
};
