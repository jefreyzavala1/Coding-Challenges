/* Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2 */

function greatestCommonFactor(array) {
  // P: Will it only be an array of numbers?Yes
  //R: Will return the gcf which is the largest factor that all the numbers share.
  //E:[46,14,20,88]
  //P:Will need to store the min value for mod value to iterate to then would need to traverse each item
  //in the array if each item is divisible by the iterator then push to an array and lastly return the max value from
  //array tha holds the gcf

  let minvaluearray = Math.min(...array); //88
  let newArray = [];
  for (let i = 1; i <= minvaluearray; i++) {
    let flag = true;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % i != 0) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      newArray.push(i);
    }
  }
  return Math.max(...newArray);
}

console.log(greatestCommonFactor([1, 8]));//1
console.log(greatestCommonFactor([468, 156, 806, 312, 442]));//26
console.log(greatestCommonFactor([91, 143, 234, 52]));//13