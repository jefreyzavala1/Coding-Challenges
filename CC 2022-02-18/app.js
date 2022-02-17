/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl" */

var longestCommonPrefix = function (strs) {
  //would like to traverse array and remove one character from each at a time if they all contain that character then
  //append to a string if not then return string

  let str = "";
  let first = strs[0];
  //console.log(first)

  for (let i = 0; i <= first.length; i++) {
    // let count = 0;
    let prefix = first.slice(0, i);
    //count++;
    //console.log(prefix);
    //if((prefix === strs[1].slice(0,i)) && (prefix === strs[2].slice(0,i))){
    //  console.log(prefix)
    // }
    let k = i;
    let count = 0;
    for (let j = 1; j < strs.length; j++) {
      if (prefix === strs[j].slice(0, i)) {
        count++;
      }
    }
    if (count === strs.length - 1) {
      str = prefix;
    }
  }
  return str;
};
