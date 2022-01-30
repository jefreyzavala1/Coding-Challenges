/* Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329.
The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962 */

function addArrays(array1, array2) {
    //P:Two arrays of integers, arrays can be empty,number can be negative if so make whole number is negative
    //R:will return an array of integers where each integer represent part of the sum of both arrays
    //E:[3,2,9],[1,2]=>[3,4,1]
    // [4,7,3],[1,2,3]=>[5,9,7]
    // [1],[5,7,6]=>[5,7,7]
    //P:Will need to extract numbers from arrays using join then convert string into  a Number then
    // add both values and then split into individual characters and convert to Number and return array
    if(array1.length==0 && array2.length===0){
      return [];
    }
    let arr1Num = Number(array1.join(''));
    let arr2Num = Number(array2.join(''));
    let sum = arr1Num + arr2Num;
    let newArr = [];
    let str = ''
    if(sum<0){
      str = sum.toString();
      str = str.slice(1);
      str = str.split('').map(num=>Number(num))
      str[0]= str[0]*-1;
    }else{
      str = sum.toString();
      str = str.split('').map(num=>Number(num))
    }
      return str;
                                      
    
  }
  