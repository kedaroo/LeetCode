/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time - 117 ms (55.21%)
// Space - 43.5 MB (99.24%)

var deleteDuplicates = function (head) {
  const uniqueList = {};
  let curr = uniqueList;

  while (head) {
    if (head.val !== curr.val) {
      curr.next = head;
      curr = curr.next;
    }
    head = head.next;
  }
  return uniqueList.next;
};
