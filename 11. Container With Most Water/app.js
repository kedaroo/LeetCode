/**
 * @param {number[]} height
 * @return {number}
 */
// Time - 76 ms (96.76%)
// Space - 49.5 MB (72.52%)

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    const currArea = (right - left) * Math.min(height[left], height[right]);
    if (currArea > area) {
      area = currArea;
    }
    height[left] < height[right] ? left++ : right--;
  }
  return area;
};
