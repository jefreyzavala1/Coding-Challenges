/* Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15 */

function sum(...arguments) {
  return arguments.reduce((accu, current) => accu + current, 0);
}

console.log(sum(1)); //1
console.log(sum(12, 1, 1, 1, 1, 1, 1)); //18
console.log(sum(5, 7, 9)); //21
