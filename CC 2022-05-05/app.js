//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(str) {
  return str.slice(-1) === "!" ? str.slice(0, -1) : str;
}

console.log(remove("Hi!")); //"Hi"
console.log(remove("Hi!!!")); // "Hi!!"
console.log(remove("Hi! Hi!")); //"Hi! Hi"
