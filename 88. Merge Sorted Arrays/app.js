/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Time - 109 ms (25.16%)
// Space - 42 MB (73.26%)

var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    result.push(nums1[i]);
    i++;
  }

  while (j < n) {
    result.push(nums2[j]);
    j++;
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
