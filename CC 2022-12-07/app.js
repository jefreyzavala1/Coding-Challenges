// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!
//input a string characters
//return the character that basically appears the most in string
//'aacd'=> 'a'
//'hello world!'=>l
//Use hash map to put each character in an object with its count and then find the highest by looping through object

function maxCharacter(s) {
  let obj = {};

  //input a string characters
  //return the character that basically appears the most in string
  //'aacd'=> 'a'
  //'hello world!'=>l

  function maxCharacter(s) {
    let obj = {};

    // for(let i = 0;i < s.length;i++){
    //   if(obj[s[i]]){
    //     obj[s[i]]++;
    //   }else{
    //     obj[s[i]] = 1
    //   }
    // }
    for (const char of s) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }

    let maxChar = null;
    let currentValue = 0;
    for (const property in obj) {
      if (obj[property] > currentValue) {
        maxChar = property;
        currentValue = obj[property];
      }
    }
    return maxChar;
  }

  let maxChar = "";
  let currentValue = 0;
  for (const property in obj) {
    if (obj[property] > currentValue) {
      maxChar = property;
      currentValue = obj[property];
    }
  }
  return maxChar;
}
