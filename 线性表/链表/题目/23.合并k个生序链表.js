/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    lists = lists.filter((list) => !!list);
  const results = {
    val: "VIRTUAL HEAD",
    next: null,
  };
  let current = results;
  while (lists.length > 0) {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      const head = lists[i];
      if (!head) continue;
      if (min >= head.val) {
        min = head.val;
        minIndex = i;
      }
    }
    const minHead = lists[minIndex];
    current = current.next = {
      val: minHead.val,
      next: null,
    };
    lists[minIndex] = minHead.next;
    lists = lists.filter((list) => !!list);
  }

  return results.next;
};
