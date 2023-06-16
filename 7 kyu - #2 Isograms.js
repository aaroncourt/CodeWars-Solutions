/*
7 kyu Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str){
    // Refactored from original solution below:
    
    // Change all letters in str to lower case and save in new var
    var lowerCaseStr = str.toLowerCase();
    
    // Check for empty string, return true if present
    if(str === ''){
      return true
    };
    
    // Start a loop to compare letter at each str[i] to rest of string
    for (let i = 0; i < str.length; i++){
       console.log(i + ': ' + lowerCaseStr)
      // if when searching lowerCaseStr starting at index i+1 includes the letter at index i, return false
      if (lowerCaseStr.includes(lowerCaseStr[i], i + 1)){
        return false
      };
    };
    // return true if no letters match
    return true
  };
  /* 
  Original Solution:
    function isIsogram(str){
      // Check for empty string, return true if present
      if(str === ''){
        return true
      };
  
      // Start a loop to compare letter at each str[i] to rest of string
      for (let i = 0; i < str.length; i++){
  
        // Use a loop to compare each letter at str[j] to letter at str[i]
        for (let j = i + 1; j < str.length; j++){
  
          // ignoring case, if str[i] equals str[j], then str != an isogram and return false
          if (str[i].toLowerCase() === str[j].toLowerCase()){
            return false
          };
        };
      };
      // return true if no letters match
      return true
    };
    */