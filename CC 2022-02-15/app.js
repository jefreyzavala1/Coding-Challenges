/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. */

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let obj = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    
    //input gonna be a roman numeral string so i can use split and traverse each character and convert to number and join
    
    let actualNum =0
    
    switch(s){
        case 'IV':
            return 4;
            break;
        case 'IX':
            return 9;
            break;
        case 'XL':
            return 40;
            break;
        case 'XC':
            return 90;
            break;
        case 'CD':
            return 400;
            break;
        case 'CM':
            return 900;
            break;
        default:
            break
    }
      let str = s.split('');
    while(str.length!=0){
        let chars =str.splice(0,2);
        let st = chars.join('');
        
        
           switch(st){
        case 'IV':
            actualNum+= 4;
            break;
        case 'IX':
            actualNum+= 9;
            break;
        case 'XL':
            actualNum+= 40;
            break;
        case 'XC':
            actualNum+= 90;
            break;
        case 'CD':
            actualNum+= 400;
            break;
        case 'CM':
            return 900;
            break;
        default:
        chars.forEach(char=>{
            actualNum+=Number(obj[char])
        })
    }
        
        
        
    }
  
    return actualNum;
};