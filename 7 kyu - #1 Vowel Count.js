/*
CodeWars
7 kyu
Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    // a variable to store the regex
    var regex = /[aeiou]/g;
    // return 0 if empty string
    if (str === ''){
        return 0
    };
    // compare the string to regex and store in variable
    var vowelArr = str.match(regex);
    // if array is null due to no vowels, return 0.
    if (vowelArr === null){
        return 0
    }
    // store length of array in new variable. length equals total num of vowels in word
    var vowelCount = vowelArr.length;
    return vowelCount
}