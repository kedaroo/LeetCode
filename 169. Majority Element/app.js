/**
 * @param {number[]} nums
 * @return {number}
 */
// Time - 123 ms (31.15%)
// Space - 45.3 MB (31.52%)

var majorityElement = function (nums) {
  const frequencyCounter = {};
  for (const num of nums) {
    frequencyCounter[num] = ++frequencyCounter[num] || 1;
    if (frequencyCounter[num] > nums.length / 2) {
      return num;
    }
  }
};

// Time - 65 ms (98.27%)
// Space - 43.1 MB (92.34%)

var majorityElement = function (nums) {
  if (!nums) return null;
  let count = 1;
  let mElement = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count > nums.length / 2) break;
    if (mElement != nums[i] && count == 0) {
      ++count;
      mElement = nums[i];
    } else if (mElement != nums[i] && count != 0) {
      --count;
    } else {
      ++count;
    }
  }
  return mElement;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
