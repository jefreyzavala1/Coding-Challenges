// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  //input an array of same length strings
  //return the number of deleted columns in which an element is not lexicographically ordered
  //will need to iterate each element and sort chars lexicographilly using sort and localeCompare twice
  //then need to check if element matches the sorted one if not then add a counter to keep track of
  //how many deleted elements and return it

  let counter = 0;

  for (const str of strs) {
    let lex1 = str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    let lex2 = str
      .split("")
      .sort((a, b) => b.localeCompare(a))
      .join("");
    console.log(lex1, lex2);
    console.log(str);
    if (str != lex2) {
      counter++;
    }
  }
  return counter;
};
