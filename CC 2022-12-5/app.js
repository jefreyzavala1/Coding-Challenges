// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//input string of characters string can empty if so return {}
//return an object with key value pairs such that keys being char pairs to how many instances of that char
//occur in the string

function occuringChar(s) {
  if (s.length === 0) {
    return {};
  }

  return s
    .split("")
    .reduce((obj, item) => (obj[item] ? obj[item]++ : (obj[item] = 1)), {});
}

console.log(occuringChar("aba"), "{'a':2,'b':1}");
console.log(occuringChar("dog"), "{'d':1,'o':1,'g':1}");

function countChars(str) {
  let countObj = {};
  for (const c of str) {
    if (countObj[c]) {
      countObj[c]++;
    } else {
      countObj[c] = 1;
    }
  }
  return countObj;
}
