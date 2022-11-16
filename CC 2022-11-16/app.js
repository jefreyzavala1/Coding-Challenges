// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(array) { 
    // good luck
    //input an array of strings where each string is the same type of letter
    //return an array in which the length of each element is equal to the average of the elements of the previous array?
    //['u','y']=>['u','y']
    //if decimal ceil function 
    //use map to extract the length of string and reduce to ceil(sum/array.length) use map again and repeat?
    // return that new array
    let average = Math.round(array.map(element=> element.length).reduce((accu,current)=> accu + current,0)/array.length)
    //3
    
    return array.map(letter=> letter[0].repeat(average))
  }