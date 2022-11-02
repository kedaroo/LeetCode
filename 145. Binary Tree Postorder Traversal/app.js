/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive Solution
// Time - 92 ms (60.3%)
// Space - 41.9 MB (75.99%)
var postorderTraversal = function (root) {
  const data = [];
  function traverse(root) {
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
    data.push(root.val);
  }

  if (root) traverse(root);

  return data;
};

// Iterative Solution
// Time - 106 ms (23.21%)
// Space - 42.1 MB (51.8%)

var postorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    if (stack[stack.length - 1].right) {
      // Peek the top
      current = stack[stack.length - 1].right;
      stack[stack.length - 1].right = null;
    } else {
      result.push(stack.pop().val);
    }
  }

  return result;
};
