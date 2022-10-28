// Time - 302 ms (61.13%)
// Space - 51.1 MB (50.92%)

function isPalindrome(num) {
  if (num < 0 || (num && num % 10 === 0)) {
    return false;
  }

  const arr = [];
  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
}
