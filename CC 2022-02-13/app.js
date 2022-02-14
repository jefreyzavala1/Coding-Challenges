/* You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr. */

function consecutive(arr, a, b) {
  //p:an array of unique integers.And two numbers being a and b.

  //r:a boolean which represents true if both a and b appear consecutive (next to each other)
  // or false if they dont in the array.

  //e:[1,3,5,7] , a = 3, b = 7 => return false;
  //  [1,3,5,7] , a = 3, b = 1 => return true

  //p: would need to obtain index of both using indexOf then if difference is one that means that they are next to each
  // other inn the array.

  let aIndex = arr.indexOf(a);
  let bIndex = arr.indexOf(b);

  return Math.abs(aIndex - bIndex) === 1;
}

console.log(consecutive([1, 3, 5, 7], 3, 7));//false

