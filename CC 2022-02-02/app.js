/* In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified! */

function foldArray(array, runs)
{
  //p:array of integer and will never be null.So no need to check if array is null
  //  runs will be a positive integer greater than 0 which describes how folds array needs to do.
  
  //r:will return an array of integer will is the result of array being folde runs amount of times.
  
  //e:[1,2,3,4,5], runs= 1, =>[6,6,3]
  
  //p:if array has one element just return array regardless of runs times,
  //  if array's length is odd then identify middle integer by Math.floor(array.length/2),
  //  integer will stay in place while from the end of the array keep adding to number in the front,
  // can use pop and shift to extract and add elements and store in new array.Will need to continue runs amount of time 
  // but for each run will need to check if array is even or odd.If even then just add last by pop and front by shift until ,
  //length of array is zero and reasign newArray for every run times.Finally return array.
  