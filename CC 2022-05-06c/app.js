const createNDimensionalArray = (n, size) => {
  // your solution goes here
  //n depth of outer array
  //n = 1 []
  //n2 = [ [] ]
  //size = number is elements inside arrays
  let unit = `level ${n}`;
  let newUnit = [];
  for (let levels = 0; levels < n; levels++) {
    for (let i = 0; i < size; i++) {
      newUnit.push(unit);
    }
    unit = newUnit;
    newUnit = [];
  }
  return unit;
};

console.log(createNDimensionalArray(1, 2)); //['level 1', 'level 1']
console.log(createNDimensionalArray(1, 3)); //['level 1', 'level 1', 'level 1']
console.log(createNDimensionalArray(2, 3)); //[['level 2', 'level 2'], ['level 2', 'level 2'],]
