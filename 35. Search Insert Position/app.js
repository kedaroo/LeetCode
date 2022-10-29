/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time - 67 ms (89.72%)
// Space - 41.8 MB (93.24%)

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = 0;
  while (start <= end) {
    middle = Math.trunc(start + (end - start) / 2);
    if (nums[middle] === target) return middle;
    nums[middle] < target ? (start = middle + 1) : (end = middle - 1);
  }
  return nums[middle] < target ? middle + 1 : middle;
};
