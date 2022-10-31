/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time - 109 ms (71.6%)
// Space - 44.7 MB (75.41%)

// Using Floyd's Cycle Finding Algorithm
var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (slowPointer && fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) return true;
  }
  return false;
};
