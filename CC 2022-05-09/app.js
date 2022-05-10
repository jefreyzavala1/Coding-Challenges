/* Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3 */

function arrayMadness(a, b) {
  return (
    a.reduce((accu, current) => accu + current ** 2, 0) >
    b.reduce((accu, current) => accu + current ** 3, 0)
  );
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3])); //true
console.log(arrayMadness([5, 6, 7], [4, 5, 6])); //false
console.log(arrayMadness([4, 5, 6], [3, 4, 5])); //false
