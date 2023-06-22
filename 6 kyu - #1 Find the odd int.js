/*
6 kyu - Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  // if A.length == 1, return A[0]
  if (A.length == 1){
    return A[0]
  };
  
  // iterate thru A to test each determine number of occurances for value in each index
  for (let i = 0; i < A.length; i++){
    //filter for a new array of only numbers matching A[i], store in new variable
    var filteredA = A.filter(num => num === A[i])
    // if filteredA.length is odd, return A[i]
    if (filteredA.length % 2 != 0){
      return A[i]
    };
  };
}
