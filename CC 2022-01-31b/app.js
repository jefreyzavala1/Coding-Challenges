/* Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input. */

function isIntArray(arr) {
  if (arr == null) {
    return false;
  }
  return arr.every((el) => Number(el) == el);
}

console.log(isIntArray([]));//true
console.log(isIntArray([1,2,3,4]));//true
