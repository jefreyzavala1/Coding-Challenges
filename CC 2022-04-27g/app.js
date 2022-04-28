/* An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible. */

function solve(n) {
  let number = n;
  let bankNotes = 0;

  if (Math.floor(number / 500) >= 1) {
    bankNotes += Math.floor(number / 500);
    number = number % 500;
  }
  if (Math.floor(number / 200) >= 1) {
    bankNotes += Math.floor(number / 200);
    number = number % 200;
  }
  if (Math.floor(n / 100) >= 1) {
    bankNotes += Math.floor(number / 100);
    number = number % 100;
  }
  if (Math.floor(number / 50) >= 1) {
    bankNotes += Math.floor(number / 50);
    number = number % 50;
  }
  if (Math.floor(n / 20) >= 1) {
    bankNotes += Math.floor(number / 20);
    number = number % 20;
  }
  if (Math.floor(number / 10) >= 1) {
    bankNotes += Math.floor(number / 10);
    number = number % 10;
  }
  return number > 0 ? -1 : bankNotes;
}

console.log(solve(770)); //4
console.log(solve(550)); //2
console.log(10); //1
console.log(125); //-1
