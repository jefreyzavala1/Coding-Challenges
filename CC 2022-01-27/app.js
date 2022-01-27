/* Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays */

function common(a,b,c){
    //P:Will it always be an array of integers?Yes
    //R: Will return sum of elements are the three arrays share
    //E: [1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
    //   [1,2,2,3],[5,3,2,2],[7,3,2,2] = 7 because 2,2 & 3 are common in the 3 arrays
    //P:will have an array that will hold the values that the three arrays share.
     // will only need to start traversing the first array using a forEach then determine using includes
     // if array b c contain element of  in array a if so push it onto newArray and remove element from b and c and finally use reduce on 
     // newArray to return the sum of the array.

}