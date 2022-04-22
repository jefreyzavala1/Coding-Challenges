/* Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills. */

function giveChange(amount) {
  let change = amount;
  let one = 0;
  let five = 0;
  let ten = 0;
  let twenty = 0;
  let fifty = 0;
  let hundred = 0;
  let array = [];
  while (change !== 0) {
    if (change >= 100) {
      hundred = Math.floor(change / 100);
      change = Math.floor(change % 100);
    }
    if (change >= 50) {
      fifty = Math.floor(change / 50);
      change = Math.floor(change % 50);
    }
    if (change >= 20) {
      twenty = Math.floor(change / 20);
      change = Math.floor(change % 20);
    }
    if (change >= 10) {
      ten = Math.floor(change / 10);
      change = Math.floor(change % 10);
    }
    if (change >= 5) {
      five = Math.floor(change / 5);
      change = Math.floor(change % 5);
    }
    if (change >= 1) {
      one = Math.floor(change / 1);
      change = Math.floor(change % 1);
    }
  }
  array.push(one);
  array.push(five);
  array.push(ten);
  array.push(twenty);
  array.push(fifty);
  array.push(hundred);
  return array;
}

console.log(giveChange(365)); //[0,1,1,0,1,3]
console.log(giveChange(217)); //[2,1,1,0,0,2]
console.log(giveChange(8)); //[3,1,0,0,0,0]
