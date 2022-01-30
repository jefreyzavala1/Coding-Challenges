/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6] */

function upArray(arr){
    // P:Will the input be only an array of integers ,have to take into account an empty array,also
    //digits are single digit and numbers are all positive.
    // R:Will return an array as well as null if input is not what we expect
    // E:[2,3,9]=> 239 + 1 => 240
    // P: extract elements using join then convert string to a number, next add 1 to add,then convert new value to
    // a string and use split('') to create an array of strings then use map to convert each character to a number type.
       if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
          return null;
      }
      for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    let str = arr.join('');
    str = Number(str);
    str++;
    let strToNum = str.toString().split('');
    strToNum = strToNum.map(el=>Number(el));
    return strToNum;
    }