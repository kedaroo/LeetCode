// Time - 99 ms (60.87%)
// Space - 43.7 MB (26.45%)

var longestCommonPrefix = function (strs) {
  let prefix = "";
  outer: for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    for (const word of strs) {
      if (word[i] !== letter) {
        break outer;
      }
    }
    prefix += letter;
  }
  return prefix;
};
