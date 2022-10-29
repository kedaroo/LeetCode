/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - 124 ms (58.53%)
// Space - 44.4 MB (84.78%)

var removeDuplicates = function (nums) {
  pointer = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
};
