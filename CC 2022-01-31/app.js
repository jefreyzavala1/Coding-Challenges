/* You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL */

function array(arr){
    //P:Parameters would consist of an empty string, or just a string of numbers separated with a commas
    //R:Will return a string with first and last charactes removed as well as space separated values
    //E:'1,2,3'=> '2'
    //     '1,2,3'=>'2'
     //    '1,2,3,4'=>'2 3'
    //P:if array is empty return null if not then split string based on a comma delimeter and store in array
      //next remove first and last values using splice
      //lastly return array joined by a space but if array formed is empty then return null
      if(arr==''){
        return null
      }
     
    let array = arr.split(',');
      array.splice(0,1);
      array.splice(-1,1);
      return array.join(' ')===''?null:array.join(' ')
    }

    console.log(array('1,2,3'));//'2'
    console.log(array('1,2,3,4'));//'2 3'
    console.log(array('1,2,3,4,5'));//'2 3 4'