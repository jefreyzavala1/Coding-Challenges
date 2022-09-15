
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
   
    //p:an array of intergers
    //r:return if sum of array is even or odd
    //e: [0] => "even", [0,1,4]=>odd, [0.-1,-5]
    //p:use reduce method to calculate sum of array then mod result with %2 if equals 0 then even else odd
  
  let sum = array.reduce((accu,current)=> accu + current,0);
  if(sum % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
  
}

console.log()