// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function dup(s) {
  //input an array of strings
  //return an array of strings where consecutive duplicate letters are remove
  //use for each to iterate over each string in array then use split and filter so that only letters the next to each other
  // are contained
  let array = [...s];
  let newarray = [];
  array.forEach((letters, i, array) => {
    let chararray = letters.split("");
    chararray = chararray.filter((itm, ind, arr) => itm !== arr[ind - 1]);
    newarray.push(chararray.join(""));
  });
  return newarray;
}

function dup(s) {
  return s.map((letters, i, array) =>
    letters
      .split("")
      .filter((item, index, array) => item !== array[index - 1])
      .join("")
  );
}
