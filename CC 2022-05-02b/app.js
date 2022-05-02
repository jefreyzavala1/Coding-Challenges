/* Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?" */

function ensureQuestion(s) {
  if (s.slice(-1) === "?") {
    return s;
  }
  let array = s.split("");
  array.push("?");
  return array.join("");
}

console.log(ensureQuestion("")); //"?"
console.log(ensureQuestion("Yes")); //"Yes?"
console.log(ensureQuestion("No?")); //"No?"
