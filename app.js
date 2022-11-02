// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] .

function last(x) {
  //input an array of words
  //ouput a string of words where the sorting its depended on the last char of each word
  //split=> to get each word out then use for each on each element to get last char and store in an array
  //then sort that array based on letters using localecompare and lastly use that char and last char of each
  //word in string and place into an array then use join.

  let wordsArray = x.split(" ");
  let charArray = [];
  let obj = {};
  wordsArray.forEach((element) => {
    let lastChar = element[element.length - 1];
    if (obj[lastChar]) {
      obj[lastChar].push(element);
    } else {
      obj[lastChar] = [element];
    }
    charArray.push(lastChar);
  });
  let sortedChars = charArray.sort((a, b) => a.localeCompare(b));
  //[a,d,d,i,i,n,o,p]
  console.log(sortedChars);
  console.log(obj);
  let goodArray = [];
  sortedChars.forEach((char) => {
    goodArray.push(obj[char].shift());
  });
  //console.log(goodArray)
  return goodArray;
}
