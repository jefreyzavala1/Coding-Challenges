/* Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above. */

function partsSums(ls) {

    //p:an array of numbers
   
    //r:an array and consist of sums of each subpart of the original array
   
    //e:ls = [0, 1, 3, 6, 10]=>[20, 20, 19, 16, 10, 0]
    
    //p:will need to iterate over original array until each element is shifted and for each shift will need
   // to calculate sum using reduce then push it onto newArray;
   if(ls.length===0 || ls ===null){
     return [0];
   }
   let array = ls.slice(0);
   
   let newArray = [];
   newArray.push(array.reduce((accu,current)=>accu + current,0));
   
   while(array.length!=0){
     array.splice(0,1);
     newArray.push(array.reduce((accu,current)=> accu + current,0))
   }
   return newArray;
 }