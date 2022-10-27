// The goal of this exercise is to convert a string to a new string where each character in the new string is
// "(" if that character appears only once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  //input a word as a string can containg english letters as well as especial chars
  // i would like to return a new string in which each char represents whether char from orignal
  // string repeats or not .if indeed does repeat place '(' if not ')'

  //turn words into an array for looping
  // use map by passing the value at each iteration of the charArray
  //use indexof and last index of to determine if char is the only one within the string or not.

  const charArray = word.split("").map((element) => element.toLowerCase());
  let newArray = charArray.map((element) =>
    charArray.indexOf(element) === charArray.lastIndexOf(element) ? "(" : ")"
  );
  return newArray.join("");
}
