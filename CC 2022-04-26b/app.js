//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
function reverse(list) {
    return list.reverse();
  }
  console.log(reverse(["Pikachu", "Snorlax", "Ditto", "Mew"]));
  //Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
  function compareSquareCubeSum(a, b) {
    return (
      a.reduce((accu, current) => accu + current ** 2, 0) >
      b.reduce((accu, current) => accu + current ** 3, 0)
    );
  }
  compareSquareCubeSum([2,2,2],[2,2,2]);
  //Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multiple(array) {
    return array.filter((number, i) => number % i == 0);
  }
  console.log(multiple([68, -1, 1, -7, 10, 10]));
  //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
  function sumOfArray(array) {
    return array.reduce((accu, current) => accu + Number(current), 0);
  }
  
  console.log(sumOfArray(["2", "2", "3", 3]));