// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

//input an array of integers and a sum integer
//return all pairs that add up to sum integer

//[1,2,2,3,4],4
//[[2,2],[3,1]]

//use a hashmap to store each num value and iterate through
//array and see if difference between sum and current num is found in array if it is then return array pair of num and difference value else just store num in array
function twoSum(array, sum) {
  let pairsArray = [];
  let obj = {};
  for (const num of array) {
    if (obj[sum - num]) {
      pairsArray.push([num, obj[sum - num]]);
    } else {
      obj[num] = num;
    }
  }

  return pairsArray;
}

console.log(twoSum([1, 2, 2, 3, 4], 4));
