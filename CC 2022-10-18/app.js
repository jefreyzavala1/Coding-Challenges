function sumMix(x){

    //array of numbers which can either represented as numbers or strings
    //return a number which describes the sum of the whole array
    //[9,3 '7','3']=> 22
    //['5',5]=>10
    //use reduce and Number to convert all to number and sum all and return
    
    return x.reduce((accu,current)=> accu +Number(current),0 )
  }

  console.log((sumMix([9, 3, '7', '3']), 22));
    console.log((sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)); 
    console.log((sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)); 