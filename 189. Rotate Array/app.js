/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time - 221 ms (5.28%)
// Space - 52.4 MB (49.93%)

var rotate = function (nums, k) {
  if (nums.length === 1 || nums.length === 0) {
    return nums;
  }
  let buffer = [];

  const shift = k % nums.length ?? k;

  for (let i = 0; i < nums.length; i++) {
    const newPos = (i + k) % nums.length;
    buffer.push(nums[newPos]);
    if (i < shift) {
      nums[newPos] = nums[i];
    } else {
      nums[newPos] = buffer[i - shift];
    }
  }
};
