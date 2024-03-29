// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//an array of 3 different numbers
//return the index in which the middle number is found

function gimme(triplet) {
  //an array of 3 different numbers
  //return the index in which the middle number is found

  //make a copy of array using slice and sort in order then store middle number and use indexof which original array
  let copy = triplet.slice();
  //smallest to greatest
  copy = copy.sort((a, b) => a - b);
  let middle = copy[1];
  return triplet.indexOf(middle);
}

function gimme2(triplet){
    let middle = triplet[1];
    if(middle > triplet[0] && middle < triplet[2]){
        middle = [triplet[0]];
    }else if(middle > triplet[0] && middle > triplet[2]){
      middle = triplet[2];
    }
    return triplet.indexOf(middle);
}
