/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */

function solve(s) {
  var regex = /^[^a-zA-Z0-9]+$/;

  let array = [];
  let upperCase = 0;
  let lowerCase = 0;
  let numbers = 0;
  let special = 0;
  let str = s.split("");
  str.forEach((el) => {
    if (!isNaN(Number(el))) {
      numbers++;
    } else if (regex.test(el)) {
      special++;
    } else if (el.toUpperCase() === el) {
      upperCase++;
    } else if (el.toLowerCase() === el) {
      lowerCase++;
    }
  });
  array.push(upperCase);
  array.push(lowerCase);
  array.push(numbers);
  array.push(special);
  return array;
}

console.log(solve("Codewars@codewars123.com")); //[1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ")); //[7,6,3,2]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")); //[15,8,6,9]
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); //[7,13,4,10]
