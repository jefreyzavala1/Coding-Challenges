// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//input is a number
//loop all the way to that number if number is divisible by 2 print "Fizz"
//if divisible by 3 print "Buzz" but when its divisible by both print "Fizz Buzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3) {
      console.log("Buzz");
    }
  }
}

console.log(fizzBuzz(15));
