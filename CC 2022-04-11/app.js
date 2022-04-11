/* Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1} */

function count(array) {
  return array.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
}

console.log(count(["a", "a", "b", "b", "b"])); //{ 'a': 2, 'b': 3 }
console.log(count(["a", "a", "b", "b", "b", "c", "d"])); //{'a':2,'b':3,'c':1,'d':1}
console.log(count(["a", , "b", "b", "c", "d"])); //{'a':1,'b':2,'c':1,'d':1}
