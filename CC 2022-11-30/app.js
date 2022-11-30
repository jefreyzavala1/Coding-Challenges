// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
function absentVowel(x) {
  //a string of words
  //return the index in which a vowel does not appear a,e,i,o,u
  //dont need to worry about capitals each string will contain all the vowels except for one

  //obj containing vowels matching value from 0-4
  //{
  // 'a':0, 'e':1, 'i':2,'o':3,'u':4
  //  }

  //split->loop obj-> validate if obj property found in array using includes if false return the value of that property
  // which would be the index
  let obj = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };

  let charArray = x.split("");
  for (const property in obj) {
    if (!charArray.includes(property)) {
      return obj[property];
    }
  }
}

//Es6
function absentVowel2(x) {
  return [..."aeiou"].findIndex((v) => !x.includes(v));
}
