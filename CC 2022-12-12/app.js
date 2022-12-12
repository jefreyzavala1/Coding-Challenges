// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  //input an array of nums
  //return if every number in array is distinct meaning no dups
  //create a hashmap and loop through array if property found in object
  //then return false and make it return true by default which gives an indication that whole array ran and no
  //dups were found
  let obj = {};

  //   for(let i = 0; i< nums.length;i++){
  //       if(obj[nums[i]]!=undefined){
  //           return true;
  //       }else{
  //           obj[nums[i]] = nums[i];
  //       }
  //   }

  for (const num of nums) {
    if (obj[num] != undefined) {
      return true;
    } else {
      obj[num] = num;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]), "true");
console.log(containsDuplicate([1, 2, 3, 4]), "false");
