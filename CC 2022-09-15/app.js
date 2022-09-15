var number = function (array) {
  //p: an array of strings , empty array can be passed
  //r: an array where each string is mapped with correct order starting with one
  //e: [] => [], ['a','b','c']=> ['1: a', '2: b' , '3: c']
  //p: loop array have a counter that starts at 1 then append : ' ' arr[i] push to new array or also use map

  //   let string = ': ';
  //   let newArray = [];
  //   let counter = 1;
  //   if(array.length===0){
  //     return [];
  //   }
  //   array.forEach(value=>{
  //     let str = counter + string + value;
  //     newArray.push(str);
  //     counter++;
  //   })
  //   return newArray;

  return array.map((element, index) => ++index + ": " + element);
};

console.log(number([])); //[]
console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]
