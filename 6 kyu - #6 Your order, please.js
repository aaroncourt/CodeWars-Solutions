/*
6 kyu - Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
  // split words into new array
  var wordArr = words.split(' ');
  var returnArr = [];
  // iterate through a count of 1-9 search for word containing each count of i
  for (let num = 1; num < wordArr.length + 1 && num < 10; num++) {
    // find the index of num in the array
    var wordArrInd = wordArr.findIndex(word=> word.includes(num));
    // if found, add to returnArr at index of num-1
    if (wordArrInd != -1){
    // use wordArrInd to add string in position wordArr[wordArrInd] to correct position order in returnArr
    returnArr[num - 1] = wordArr[wordArrInd];
    } else { returnArr[num-1] = '' };
  };
  // join returnArr and return
  return returnArr.join(' ')
}
