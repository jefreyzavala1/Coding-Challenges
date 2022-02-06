function evenNumbers(array, number) {
  //p:array of positive and negative integers?

  //r:an array that consists of (number) amount of even integers.

  //e:([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)=>[4, 6, 8]
  //  ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

  //p:will reverse initial array and extract the (number) of even numbers (number) times and insert
  // in newArray and finally it reverse it and return it

  let array1 = array.reverse();
  let counter = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArray.push(array[i]);
      counter++;
    }
    if (counter == number) {
      break;
    }
  }
  return newArray.reverse();
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4,6,8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //[-8,26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //[6]
