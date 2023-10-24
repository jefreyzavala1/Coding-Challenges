//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number

//arr -> str & num

function sumAllValues(arr) {
  //sum all of the nums in the arr
  //loop through all nums and add together
  //reduce -> convert to nums and sum

  return arr.reduce((accu, current) => accu + Number(current), 0);
}

console.log(sumAllValues([9, 3, "7", "3"]), 22);
console.log(sumAllValues(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
