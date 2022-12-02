// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

//input would be a string of character no speacials characters
// return the string  but in reverse order.

//car=> rac
//name=>eman

function reverseString(s) {
  //iterate from the end and pop off that character and added to an array
  let newString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }
  return newString;
}

console.log("car", reverseString("car"));
console.log("name", reverseString("name"));
