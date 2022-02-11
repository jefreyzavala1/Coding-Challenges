function validate(password) {
  
    //p:will be a string of random chars?
   
    //r: a boolean true or false if string meets all the criteiras
    
    //:e: djI38D55=> true,a2.d412=>false
    
    //p: will need to evaluate each condition if one is false then return false else continue to last condition and finally return
    // true

    password =  password.replace(/[^a-zA-Z0-9]/g, '');

    if(password.length < 6 ){
      return false;
    }
    
    let array = password.split('');
  //console.log(array)
  let arrayOfNums = array.filter(char=>Number(char))
  //console.log(arrayOfNums);
  let arrayOfLower = array.filter(char=>char===char.toLowerCase() && !Number(char))
 // console.log(arrayOfLower);
  let arrayOfUpper = array.filter(char=>char===char.toUpperCase() && !Number(char))
  //console.log(arrayOfNums)
  if(arrayOfNums.length >=1){
    if(arrayOfLower.length >=1){
      if(arrayOfUpper.length >=1){
        return true
      }
    }
  }
  return false;
}