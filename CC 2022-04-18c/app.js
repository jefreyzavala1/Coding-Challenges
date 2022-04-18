/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1, -4, 7, 12])); //20
console.log(positiveSum([1, -4, -5, 2])); //3
console.log(positiveSum([-3, -4, -3])); //0
