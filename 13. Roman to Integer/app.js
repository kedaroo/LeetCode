// Time - 224 ms (55.77%) 
// Space - 47 MB (74.2%)

const RomanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let result = 0;
  let curr = 0;
  let next = 0;
  for (let i = 0; i < s.length; i++) {
    curr = RomanMap[s[i]];
    next = RomanMap[s[i + 1]];
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }

  return result;
};
