/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  //p:nums an array of numbers can be negative numbers
  //r:return the largest sum
  //e:[-2,1,-3,4,-1,2,-5,4]=> [4,-1,2,1]=>6
  //p:using kadane algorithm
  let max_current = nums[0];
  let max_global = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max_current = Math.math(max_current, max_current + nums[i]);
    if (max_current > max_global) {
      max_global = max_current;
    }
  }
  return max_global;
};
