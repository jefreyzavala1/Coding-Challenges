/* Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

function stringClean(s) {
  if (s.length === 0) {
    return "";
  }
  let newArray = s.split(" ");
  let array = [];
  newArray.forEach((str) => {
    let split = str.split("");
    let arr = split.filter((st) => isNaN(Number(st)));
    let item = arr.join("");
    array.push(item);
  });
  return array.join(" ");
}

console.log(stringClean("")); //""
console.log(stringClean("! !")); //"! !"
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); //"Dsa cdsc csa!!! I Am cool!"
console.log(
  stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")
); //"Why can't we buy the good software? #cheapskates"
