/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
// Time - 77 ms (83.57%)
// Space - 42.8 MB (35.41%)

var uncommonFromSentences = function (s1, s2) {
  const uncommonWords = {};

  const words1 = s1.split(" ");
  const words2 = s2.split(" ");

  for (const word of words1) {
    uncommonWords[word] = ++uncommonWords[word] || 1;
  }

  for (const word of words2) {
    uncommonWords[word] = ++uncommonWords[word] || 1;
  }

  let result = [];

  for (const key in uncommonWords) {
    if (uncommonWords[key] === 1) {
      result.push(key);
    }
  }
  return result;
};
