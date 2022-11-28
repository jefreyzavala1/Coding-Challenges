// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
const removeConsecutiveDuplicates = (s) => {
  //input a string of words
  // return a string that consist of the initial string but with containting of the first word of word is
  // repeated consecutive
  //"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"->
  // "alpha beta gamma delta alpha beta gamma delta"

  //iterate through string one by one and for each word that is consecutive splice string to a certain point and keep going
  //will it be an empty string, does it contain special chatacters will always consists of consecutavive words

  let arrayWords = s.split(" ");
  let newArray = [];
  while (arrayWords.length != 0) {
    //holding index
    //hold first word
    let i = 0;
    let first = arrayWords[0];
    if (first == arrayWords[1]) {
      i = 2;
      while (first === arrayWords[i]) {
        i++;
      }
      //2
      newArray.push(first);
      arrayWords.splice(arrayWords[0], i);
    } else {
      newArray.push(arrayWords.shift());
    }
  }
  return newArray.join(" ");
};
