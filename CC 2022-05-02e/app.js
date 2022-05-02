/* This function should return an element from the multidimensional array (length > 0) by the specified indices (length > 0).

For example:

  ( [[1, 2], [3, 4], [5, 6]], [0,0] )  => 1        (arr[0][0]) 
  ( ['one','two','three'], [2] )       => 'three'  (arr[2]) 
  ( [[[ 1, 2, 3]]], [ 0, 0, 1 ] )      => 2        (arr[0][0][1]) */

function multi(arr, index) {
  for (let i = 0; i < index.length; i++) {
    arr = arr[index[i]];
  }
  return arr;
}

console.log(
  multi(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [0, 0]
  )
); //1
console.log(multi(["one", "two", "three"], [2])); //"three"
console.log(multi([[[1, 2, 3]]], [0, 0, 1])); //2
