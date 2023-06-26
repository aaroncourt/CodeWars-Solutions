function count(string) {
  if (!string){
    return {}
  };
  // init var to store return object
  var retObj = new Map();
  // iterate through string argument
  for (let char of string){
    // init temp variable to hold value of key if present in obj
    let tempVal = 0;
    // determine if char is present in retObj variable
    if (retObj.has(char)){
      // if char is present as get, retreive value and then incriment
      tempVal = retObj.get(char);
      retObj.set(char, tempVal+1);
    } else {
      // if char not present as key, set as key with a value of 1
      retObj.set(char, 1);
    };
  };
  // return retObj using fromEntries to turn the key-value pairs into an object
  return Object.fromEntries(retObj);
}
