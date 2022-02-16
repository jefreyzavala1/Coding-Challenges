/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //input gonna be a roman numeral string so i can use split and traverse each character and convert to number and join
  //basically im checking each two characters if they arent part of the switch then just splice one else splice both.
  let actualNum = 0;

  let str = s.split("");

  while (str.length != 0) {
    let chars = str.slice(0, 2);
    let st = chars.join("");
    //console.log(st)
    if (st === "IV") {
      str.splice(0, 2);
      actualNum += 4;
    } else if (st === "IX") {
      str.splice(0, 2);
      actualNum += 9;
    } else if (st === "XL") {
      str.splice(0, 2);
      actualNum += 40;
    } else if (st === "XC") {
      str.splice(0, 2);
      actualNum += 90;
    } else if (st === "CD") {
      str.splice(0, 2);
      actualNum += 400;
    } else if (st === "CM") {
      str.splice(0, 2);
      actualNum += 900;
    } else {
      let st = str.splice(0, 1);
      actualNum += Number(obj[st]);
    }
    console.log(str);
  }

  return actualNum;
};
