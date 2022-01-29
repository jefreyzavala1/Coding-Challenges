function sortArrays(arr1, arr2) {
  //P:Will it only be two arrays of 2 elements and more of integers?Yes
  //R:will return a 2d array that consists of  first one sorted based on the indexes of when second array2 is sorted and values
  //are found based on its current state.Will do that for array two as well but based on array1;
  //E:arr1=[5,4,3,2,1],
  //  arr2=[6,5,7,8,9]
  //  = [4,5,3,2,1],[9,8,7,5,6]
  //P: will need to make copies from both arrays passed.Will need newArray variable that will return an array of these two arrays.make a copy of both arrays using slice,then sort array2 and find where
  //each item is found and put an empty string using slice so i can take into account dups values,
  //then store the values of arr1 in sortArr1 based on the indeces found in array 2.Do same steps with array2;

  let newArr1 = arr1.slice();
  let newArr2 = arr2.slice();

  let sortArr1 = [];
  let sortArr2 = [];

  let newArray = [];

  arr2 = arr2.sort((a, b) => a - b);

  newArr2.forEach((number, i) => {
    let index = arr2.indexOf(number);
    arr2.splice(index, 1, "");
    sortArr1[index] = newArr1[i];
  });
  newArray.push(sortArr1);

  arr1 = arr1.sort((a, b) => a - b);

  newArr1.forEach((number, i) => {
    let index = arr1.indexOf(number);
    arr1.splice(index, 1, "");
    sortArr2[index] = newArr2[i];
  });
  newArray.push(sortArr2);
  return newArray;
}

console.log(sortArrays([5, 4, 3, 2, 1], [6, 5, 7, 8, 9])); //[[4,5,3,2,1],[9,8,7,5,6]]
console.log(sortArrays([2, 1, 3, 4, 5], [5, 6, 7, 8, 9])); //[[2,1,3,4,5],[6,5,7,8,9]]
console.log(sortArrays([5, 6, 9, 2, 6, 5], [3, 6, 7, 4, 8, 1])); //[[5,5,2,6,9,6],[4,3,1,6,8,7]]
