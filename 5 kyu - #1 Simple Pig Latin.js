/*
5 kyu - Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  //initate variable for outputting
  var pigLatin = '';
  // seperate string into blocks of characters and split by spaces
  var strArr = str.split(' ');
  // loop thru array
  for (let i = 0; i < strArr.length; i++){
    // if puncuation, set in place to match original arguement
    if (!!strArr[i].match(/^[.,:!?;]/)){
      pigLatin += strArr[i];
    } else {
    // if word, move first letter and add 'ay'  
      var firstLtr = strArr[i].charAt(0);
      pigLatin += strArr[i].replace(firstLtr, '') + firstLtr + 'ay';
    };
    // if not last index of array, add a space character to pigLatin
    if (i != strArr.length - 1){
      pigLatin += ' '
    };
  };
return pigLatin
}
