function countInversions( array ){
    //P:Will it only be an array of integers?Yes.Will it be anything else besides an
    //array?No.
    //r:Will it always return an integer value?YES 
    //E:[1,2,3,4] => 0 inversions
      //[1,3,2,4] => 1 inversions : 2 and 3
      //[4,1,2,3] => 3 inversions: 4 and 1, 4 and 2 and 4 and 3
    //p:if array is empty should return 0,function should have a counter to count 
    //inversions which simple refers to the amount of times a number is greater than the number to the right
    //so i would have two loops outer loop will iterate each element and the inner loop will iterate the numbers to the right of 
    // the element from the outer loop.If element is bigger inversions will increment.Loop till end of array.

    if (array.length==0){
        return 0;
      }
      let inversions  = 0;
      for(let i = 0;i < array.length;i++){
        for(let j = i +1;j < array.length;j++){
          if(array[i]> array[j]){
            inversions++;
          }
        }
      }
      return inversions;
}