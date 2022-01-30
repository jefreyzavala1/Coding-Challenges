let trueIfEven = function (v, i) {
  return v % 2 === 0;
};
let neverTrue = function (v, i) {
  return false;
};
let trueIfValueEqualsIndex = function (v, i) {
  return v === i;
};
let trueIfLengthEqualsIndex = function (v, i) {
  return v.length === i;
};

let findInArray = function(array, iterator) {
    let value = -1;
    value = array.findIndex((item,index)=> iterator(item,index))
    return value;
  };
