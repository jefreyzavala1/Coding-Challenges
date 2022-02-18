/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    
    let sarray = s.split('');
    let mid = Math.floor(sarray.length/2);
    let firstArray = sarray.slice(0,mid);
    let secondArray = sarray.slice(mid);
    console.log(firstArray);
    console.log(secondArray)
    let flag = true;
    let count = 0;
    if(s.length % 2 == 1){
        return false;
    }
    
    while(firstArray.length!=0){
        let elementOne = firstArray.shift();
        console.log(elementOne)
        if(elementOne ==='{'){
            
            if(secondArray.length==0)
            {
                if(firstArray.lastIndexOf('}')>=0){
                    firstArray.splice(firstArray.lastIndexOf('}'),1)
                }else{
                    flag = false;
                    
                }
            }else{
                                                   
            if(secondArray.lastIndexOf('}')>=0){
                secondArray.splice(secondArray.lastIndexOf('}'),1)
            }else{
                flag = false;
                
            }
                }
                
                
            }
        if (elementOne === '('){
            
            if(secondArray.length==0)
            {
                if(firstArray.lastIndexOf(')')>=0){
                    firstArray.splice(firstArray.lastIndexOf(')'),1)
                }else{
                    flag = false;
                    
                    
                }
            }else{
                                              
            if(secondArray.lastIndexOf(')')>=0){
                
                secondArray.splice(secondArray.lastIndexOf(')'),1)
            }else{
                flag = false;
                
                
            }
                }
                
                
            }
           
    }

    return flag;
}