// Time - 111 ms (38.25%)
// Space - 42.7 MB (46.94%)

var isValid = function (s) {
  const stack = [];
  for (const bracket of s) {
    switch (bracket) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (bracket !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
