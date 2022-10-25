/**
 * @param {number} x
 * @return {number}
 */

// Time - 109 ms (77.35%)
// Space - 44.9 MB (5.96%)

var mySqrt = function (x) {
  let start = 1;
  let end = x;
  let middle = 0;

  while (start <= end) {
    middle = start + (end - start) / 2;

    if (Math.trunc(middle * middle) === x) {
      return Math.trunc(middle);
    }

    middle * middle < x ? (start = middle) : (end = middle);
  }
  return Math.trunc(middle);
};
