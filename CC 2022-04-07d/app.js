/* Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"} */

const ultimateReverse = (s) => {
  //let str = s.reverse();
  let newStr = s.map((number) => {
    return number.split("").reverse().join("");
  });
  newStr = newStr.reverse().join("");
  newStr = newStr.split("");
  //return newStr;
  let reverseArray = [];
  for (let i = 0; i < s.length; i++) {
    reverseArray.push(newStr.splice(0, s[i].length).join(""));
  }
  return reverseArray;
};

console.log(
  ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])
); //["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
console.log(
  ultimateReverse([
    "?kn",
    "ipnr",
    "utotst",
    "ra",
    "tsn",
    "iksr",
    "uo",
    "yer",
    "ofebta",
    "eote",
    "vahu",
    "oyodpm",
    "ir",
    "hsyn",
    "amwoH",
  ])
); //["How", "many", "shrimp", "do", "you", "have", "to", "eat","before", "your", "skin", "starts", "to", "turn", "pink?"]
