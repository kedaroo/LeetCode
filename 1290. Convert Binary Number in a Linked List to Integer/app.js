/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// Time - 59 ms (96.47%)
// Space - 41.9 MB (62.85%)

var getDecimalValue = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const result = arr.reduce(
    (prev, curr, idx) => prev + curr * Math.pow(2, arr.length - idx - 1),
    0
  );

  return result;
};

// Time - 111 ms (17.30%)
// Space - 42.4 MB (14.13%)
var getDecimalValue = function (head) {
  const binaryStr = "";
  while (head) {
    binaryStr += head.val;
    head = head.next;
  }
  console.log(binaryStr);
  const result = parseInt(binaryStr, 2);

  return result;
};
