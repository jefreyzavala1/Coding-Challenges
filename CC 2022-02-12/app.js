/* Description:
Give an array arr that contains some integers, one of the integers appears times is more than the half of the total numbers of element(arr always has such a integer). Your task is to find it. For example:

arr = [0,1,3,3,3,3,3,1,0], should return 3
Of course, these integers are not always continuous ;-)

arr = [1,2,1,3,1,4,1,5,1], should return 1
Other numbers can be repeated too:

arr = [1,1,1,3,3,3,1,1,1,5,5,5,1,1], should return 1 */

function mostAppear(arr){
  
    //p: array of numbers contains atleast 5 elements,length will always be odd
    
    //r: will return the number that appeas more than half of the length of the array in half
    
    //e: [0,1,3,3,3,3,3,1,0] should return 3
    // [1,2,1,3,1,4,1,5,1]  should return 1
    
    //p: will need to calculate the half the size of the array using Math.floor(arr.length/2)
    //will need to traverse arra and for each element create a subarray using map of such number,
    //return such number if is greater than more than half of the length of the array
    
    let threshold = Math.floor(arr.length/2);
   
    let num = 0;
    arr.forEach(number=>{
      let subNumber = arr.filter(thisNumber=>thisNumber===number);
      console.log(subNumber,threshold)
    if(subNumber.length>threshold){
      num = number;
    }
    })
    
    return num;
    
    
  }