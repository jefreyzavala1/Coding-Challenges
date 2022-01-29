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
}
