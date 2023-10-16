// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//p:a number
//r: return a string fizzbuzz, fizz,or buzz
//e: 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz fizz 13 14 fizzbuzz
//p: create a loop from 1 to input n then for each iteration check if number is first divisible by both 3,5 if so log ("fizzbuzz") else if is divisible by 3 log (fizz) else if divisible by 5 log(fizzbuzz)

function fizzbuzz(input) {
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);
