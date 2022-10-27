/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  for (let i = 0; Math.pow(2, i) <= n; i++) {
    const square = Math.pow(2, i);
    if (square === n) {
      return true;
    }
  }
  return false;
};

var isPowerOfTwo = function (n) {
  return Number.isInteger(Math.log2(n));
};

console.log(isPowerOfTwo(2));
