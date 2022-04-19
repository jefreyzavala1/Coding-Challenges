// Lowercase strings in array

// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

function arrayLowerCase(arr) {
  return arr.map((str) => (typeof str === "string" ? str.toLowerCase() : str));
}

console.log(arrayLowerCase(["Red", "Green"])); //['red', 'green']
console.log(arrayLowerCase([1, "Green"])); //[1, 'green']
