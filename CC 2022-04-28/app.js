//Write function RemoveExclamationMarks which removes all exclamation marks from a given string

function removeExclamationMarks(s) {
  let spl = s.split(" ");
  let array = [];
  spl.forEach((word) => {
    let str1 = word.split("");
    let str2 = "";
    str1.forEach((str) => {
      if (str != "!") {
        str2 += str;
      }
    });
    array.push(str2);
  });
  return array.join(" ");
}

console.logremoveExclamationMarks("Hello World!"); //"Hello World"
