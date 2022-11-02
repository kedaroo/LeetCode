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
// Time - 108 ms (20.33%)
// Space - 42.5 MB (18.93%)
var preorderTraversal = function (root) {
  const data = [];
  function traverse(root) {
    data.push(root.val);
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }

  if (root) traverse(root);

  return data;
};

// Iterative Solution
// Time - 75 ms (81.7%)
// Space - 42.6 MB (11.97%)

var preorderTraversal = function (root) {
  const data = [];
  const stack = [root];

  while (stack.length) {
    root = stack.pop();
    if (root) {
      data.push(root.val);
      if (root.right) stack.push(root.right);
      if (root.left) stack.push(root.left);
    }
  }

  return data;
};
