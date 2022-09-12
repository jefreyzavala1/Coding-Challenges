// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
	
    //p: an integer representing the index of the odd triangle
    //r:the sum of all odd integers at a given index
    //e:n = 1 returns 1, 42 returns 74088
    //p:lets have an array of multiple arrays where each index would represent an array of n level
    //will need a for loop where the length of the outer array is of length n -1
    let countOdd = -1;
    let array = [];
    let innerArray = [];
    for(let i = 0;i <= n-1;i++){
      for(let j = 1;j <=n;j++){
      innerArray.push(countOdd + 2)
        console.log(innerArray)
        
      }
      //[1,3]
     
      array.push(innerArray);
      
    }
    //console.log(array);
  }