// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
  //input a string of words with upper and lower case characters
  //output the string with words in reverse with each case switched
  //"Example Input"=> "iNPUT eExample"

  //need to separate each word into array based on empty space
  //then for each element create a new array of each character switch cases then store word back to an array
  // be sure to use trim to remove leading spaces then return array. join with space as delimitter.

  let arrayWords = str.split(" ");
  let arrayTrimmed = arrayWords.map((element) => element.trim());
  let newArray = [];
  arrayTrimmed.forEach((element) => {
    let charsArray = element.split("");
    let charArray2 = charsArray.map((char) =>
      char.localeCompare(char.toLowerCase())
        ? char.toLowerCase()
        : char.toUpperCase()
    );
    newArray.push(charArray2.join(""));
  });
  return newArray.reverse().join(" ");
}
