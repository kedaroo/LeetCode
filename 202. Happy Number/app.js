/**
 * @param {number} n
 * @return {boolean}
 */

// Time - 95 ms (74.22%)
// Space - 44.5 MB (21.78%)

function summify(num) {
  let sum = 0;
  while (num) {
    let digit = num % 10;
    sum += Math.pow(digit, 2);
    num = Math.floor(num / 10);
  }
  return sum;
}

var isHappy = function (n) {
  const seen = {};

  while (!seen[n]) {
    seen[n] = true;
    n = summify(n);
    if (n === 1) return true;
  }

  return false;
};

console.log(isHappy(4));
