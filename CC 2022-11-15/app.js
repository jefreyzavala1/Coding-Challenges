// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
function sortArray(array) {
    // Return a sorted array.
    
    //input would be an array of numbers can be even or odd
   //output an array of odd numbers being sorted in ascending order while the evens are left are original position
  // [7,1]=>[1,7]
  //[5,8,6,3,4]=> [3,8,6,5,4]
    
    //[5,3]=>[3,5]
    //[8,6,4]  even array
    //empty array where for index i will check if its the same index at original if so if even shift and push else do same for odd array
    
  let filterOdd= array.filter(num=> num%2!==0);//[5,3]
  let filterEven = array.filter(num=> num%2===0);//[8,6,4]
  filterOdd = filterOdd.sort((a,b)=> a -b);//[3,5]
  
  let fixedArray = [];
  for(let i = 0;i < array.length;i++){
    if(array[i]%2===0){
      let even = filterEven.shift();
      fixedArray.push(even)
    }else{
      let odd = filterOdd.shift();
      fixedArray.push(odd);
    }
  }
    return fixedArray;
  }