/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". */

function switchItUp(number){

    //p:will param always be a num type?always positive?0-9 
    
    //r: a string? will represent word of given number
    
    //e:9=='nine',1=='one'
    
    //p:object that contains number as prop and value as the word,and just return value using bracket notation
    
    let convert = {
      '0':'Zero',
      '1':'One',
      '2':'Two',
      '3':'Three',
      '4':'Four',
      '5':'Five',
      '6':'Six',
      '7':'Seven',
      '8':'Eight',
      '9':'Nine'
    };
    
    return convert[number]
}

console.log(switchItUp(1));//"One"
console.log(switchItUp(3));//"Three"
console.log(switchItUp(5));//"Five"