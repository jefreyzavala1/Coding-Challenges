/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {
  //p:an array of 4 or more positive integers, no floats or non-integers will passed.
  //r: will return the sum of the two lowest numbers found in the array
  //e::[19,5,42,2,77] => 7, [5, 8, 12, 19, 22] => 13
  //p: I can use sort function to place numbers from lowest to highest and return the sum of the first two elements of array

  let sortedArray = numbers.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //10
