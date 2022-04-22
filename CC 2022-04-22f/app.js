/* Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479" */

function unusedDigits(...arr) {
  let str = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayOfNums = [];
  let newArray = [...arr];
  newArray = newArray.map((num) => num.toString());
  newArray.forEach((num) => {
    let str = num.split("");
    str.forEach((nums) => {
      if (!arrayOfNums.includes(nums)) {
        arrayOfNums.push(nums);
      }
    });
  });
  arrayOfNums = arrayOfNums.map((num) => Number(num));
  let not = str.filter((num) => !arrayOfNums.includes(num));
  return not.join("");
}
console.log(unusedDigits(2015, 8, 26));
