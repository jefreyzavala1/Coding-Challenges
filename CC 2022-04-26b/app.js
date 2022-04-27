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