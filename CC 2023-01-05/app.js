// // It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// // At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// // Return the maximum number of ice cream bars the boy can buy with coins coins.

// // Note: The boy can buy the ice cream bars in any order.

// Example 1:

// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.

var maxIceCream = function (costs, coins) {
  //input a cost array which contains the prices of each chocolate bar
  //coins int value which describes the amount of money the kid has

  let numBars = 0;

  let sortCosts = costs.sort((a, b) => a - b);
  let currentCoins = coins;
  for (const bar of costs) {
    if (currentCoins >= bar) {
      numBars++;
      currentCoins = currentCoins - bar;
    } else {
      break;
    }
  }
  return numBars;
};
