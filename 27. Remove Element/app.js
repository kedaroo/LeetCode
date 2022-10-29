// Time - 101 ms (42.68%) 
// Space - 42.2 MB (43.85%)

var removeElement = function (nums, val) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[start] === val) {
      nums[start] = nums[end];
      end--;
    } else {
      start++;
    }
  }
  return start;
};
