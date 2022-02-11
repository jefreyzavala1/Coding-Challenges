function isLanguageDiverse(list) {
  //p:an array of ojects with multiple properties?

  //r:a boolean true or false if the difference between the language is atmost 2 false is is greater than 2

  //e:Python,Ruby,JS,JS,JS == false
  //JS,JS,Ruby,Ruby,Ruby,Python,Python,Python == true

  //p:would need to calculate the count for each developers language.
  //so language should be represented at most 2 times?

  let countP = 0;
  let countR = 0;
  let countJs = 0;

  list.forEach((obj) => {
    if (obj.language == "Python") {
      countP++;
    } else if (obj.language == "Ruby") {
      countR++;
    } else if (obj.language == "JavaScript") {
      countJs++;
    }
  });
  let array = [countP, countR, countJs];
  array = array.sort((a, b) => a - b);
  let max = array.pop();
  if (array[0] * 2 < max) {
    return false;
  }
  if (array[1] * 2 < max) {
    return false;
  }
  return true;
}
