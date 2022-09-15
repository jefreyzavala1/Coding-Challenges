function oddOrEven(array) {
   
    //p:an array of intergers
    //r:return if sum of array is even or odd
    //e: [0] => "even", [0,1,4]=>odd, [0.-1,-5]
    //p:use reduce method to calculate sum of array then mod result with %2 if equals 0 then even else odd
  
  let sum = array.reduce((accu,current)=> accu + current,0);
  if(sum % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
  
}