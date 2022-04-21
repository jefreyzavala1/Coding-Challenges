/* Task
You have a string of length n consisting of zeroes and ones. Consider the following operation:

Choose any two adjacent positions in the string
If one of them is 0, and the other one is 1, 
remove these two digits from the string.
What is the length of the smallest string that you can get after applying this operation multiple times?

Example
For s = "01010", the result should be 1.

"01010" -> " 010" -> " 0"

For s = "110100", the result should be 2.

"110100" -> "1 100" -> "1 0"

Note that after the operations, the remaining digits are separated by spaces and thus not adjacent ;-)

Input/Output
[input] string s
The initial string.

[output] an integer */

function zeroAndOne(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] == "1" && arr[i + 1] == "0") ||
      (arr[i] == "0" && arr[i + 1] == "1")
    ) {
      arr.splice(i, 2, " ", " ");
      i++;
    }
  }
  return arr.filter((el) => el != " ").length;
}

console.log(zeroAndOne("01010")); //1
console.log(zeroAndOne("11101111")); //6
console.log(zeroAndOne("110110")); //2
