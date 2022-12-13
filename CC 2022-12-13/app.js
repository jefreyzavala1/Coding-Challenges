// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  //input an array of nums
  //output the element found the most in array
  //use a hashmap and store each number as property and hold a value such that it represents its
  //occurence in the nums array
  //loop through object and extract the num whole value is the biggest and return it

  let obj = {};

  for (const num of nums) {
    if (obj[num] !== undefined) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  let biggest = null;
  let num = null;
  for (const property in obj) {
    if (obj[property] > biggest) {
      biggest = obj[property];
      num = Number(property);
    }
  }
  return num;
};
