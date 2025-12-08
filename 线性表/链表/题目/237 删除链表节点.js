/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let current = node
    let nextNode = current.next
    while(nextNode.next!==null){
        current.val = nextNode.val
        current = nextNode
        nextNode = nextNode.next
    }
    current.val = nextNode.val
    current.next = null
};