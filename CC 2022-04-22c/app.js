/* Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1] */

function solve(arr) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let newArray = [];
  arr.forEach((el) => {
    let count = 0;
    let split = el.split("");
    split = split.map((el) => el.toUpperCase());
    split.forEach((el, i) => {
      if (split[i] == alphabet[i]) {
        count++;
      }
    });
    newArray.push(count);
  });
  return newArray;
}

console.log(solve(["abode", "ABc", "xyzD"])); //[4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); //[4,3,0]
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); //[6, 5, 7]
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); //[1, 3, 1, 3]
