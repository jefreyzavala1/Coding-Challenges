/* Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7 */

function longest(words) {
  let arr = words.map((str) => str.length);
  return arr.sort((a, b) => a - b).pop();
}

console.log(longest(["simple", "is", "better", "than", "complex"])); //7
console.log(longest(["explicit", "is", "better", "than", "implicit"])); //8
console.log(longest(["beautiful", "is", "better", "than", "ugly"])); //9
