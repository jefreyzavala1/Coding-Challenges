/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples. */

function dup(s) {
  //P:Will it only be an array of strings?Yes .Do i need to take into account uppercase and lowercase?
  //No parameter will only be lowercase strings with no spaces.
  //R:Will return an array where each string does not contain any consecutive character that match.
  //E:['kelless','keenes']=>['keles','kenes']
  //  ["callalloo","feelless","heelless"]=>['calalo','feles','heles']
  //  ["kelless","voorraaddoosspullen","achcha"]=>['keles','voradospulen','achcha']
  //P: Have an array that will return the final strings without any consecutive match
  //  using a foreach to iterate each string and use a for loop to iterate over each individual character
  //use an array to store each visited character and if current character in the string does not equal to character array
  // index thats currently visited then add it to array and increment start which represents the current character in the array.
  // after the end of forEach join the array to form and a string and add it to the newArray that at the end will be returned

  let newArray = [];

  s.forEach((str) => {
    //str = 'abracadabra'
    let charsArray = [];
    let start = 0;
    charsArray[start] = str[0];
    start = 1;
    for (let i = 1; i < str.length; i++) {
      if (charsArray[start - 1] != str[i]) {
        charsArray[start] = str[i];
        start++;
      }
    }
    let strFormed = charsArray.join("");
    newArray.push(strFormed);
  });
  return newArray;
}
