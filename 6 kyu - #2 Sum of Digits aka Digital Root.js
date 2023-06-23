/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
  // variables to hold n as array and sum of digits
  var nArr = Array.from(String(n), Number);
  var sum = 0;
  // if n.length == 1, return n
  if (n.length == 1) {
    return n
  };
  // loop thru array, adding eachn digit to the sum
  while (nArr.length > 0) {
    sum += nArr.shift()
    // if nArr.length == 0, check length of sum
    if (nArr.length == 0) {
      var sumArr = Array.from(String(sum), Number);
      // if length of sum is > 1, add concat nArr and sumArr into nArr, reset sum to 0
      if (sumArr.length > 1) {
        nArr = nArr.concat(sumArr)
        sum = 0
      };
    };
   };
  return sum
}
