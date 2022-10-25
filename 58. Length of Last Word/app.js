// Time - 72 ms (82.48%)
// Space - 41.7 MB (85.9%)

var lengthOfLastWord = function (s) {
  const words = s.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") {
      return words[i].length;
    }
  }
};
