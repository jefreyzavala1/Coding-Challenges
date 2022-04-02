/* In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
Every other number occurs twice. */

function repeats(arr){
    let array = [];
      arr.forEach((number,index)=>{
        if(!(arr.slice(index + 1).includes(number))&& !(array.includes(number)) 
           && !(arr.slice(0,index).includes(number))){
          array.push(number);
        }
      })
      return array[0] + array[1]
    };

    console.log(repeats([4,5,7,5,4,8]));//15
    console.log(repeats([9, 10, 19, 13, 19, 13]))//19
    console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));//22