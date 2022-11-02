/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// Time - 70 ms (86.30%) 
// Space - 41.7 MB (85.93%)

var countStudents = function (students, sandwiches) {
  let rejectionCount = 0;
  let stackPointer = 0;

  while (rejectionCount !== students.length) {
    if (students[0] === sandwiches[stackPointer]) {
      stackPointer++;
      students.shift();
      rejectionCount = 0;
    } else {
      students.push(students.shift());
      rejectionCount++;
    }
  }

  return students.length;
};
