/**
 * @param {string} s
 * @return {number}
 */
// Time - 100 ms (55.82%)
// Space - 42.5 MB (25.43%)

var maxDepth = function (s) {
  let maxDepth = 0;
  let counter = 0;

  for (const char of s) {
    if (char === "(") {
      maxDepth = Math.max(++counter, maxDepth);
    } else if (char === ")") {
      counter--;
    }
  }

  return maxDepth;
};
