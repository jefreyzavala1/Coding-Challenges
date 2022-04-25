/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  let str = "";
  if (bmi <= 18.5) {
    str = "Underweight";
  } else if (bmi <= 25) {
    str = "Normal";
  } else if (bmi <= 30) {
    str = "Overweight";
  } else if (bmi > 30) {
    str = "Obese";
  }
  return str;
}

console.log(bmi(80, 1.8));
