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

// Time - 105 ms (26.19%)
// Space - 41.9 MB (79.29%)

// Recursive
// var inorderTraversal = function (root) {
//   var data = [];
//   function traverse(node) {
//     if (node.left) traverse(node.left);
//     data.push(node.value);
//     if (node.right) traverse(node.right);
//   }
//   if (root) {
//     traverse(this.root);
//   }
//   return data;
// };

// Iterative
var inorderTraversal = function (root) {
  var data = [];
  let stack = [root];

  while (stack.length) {
    console.log(stack);
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      data.push(root.val);
      root = root.right;
    }
  }
  return data;
};
