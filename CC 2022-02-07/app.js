function exchangeWith(a, b) {

    //p:Will two arrays,can either be of strings or numbers?
    
    //r:nothing just modify global values passed to params.
    
    //e:const myArray = ['a', 'b', 'c'];
     // const otherArray = [1, 2, 3];=>myArray => [3, 2, 1]
     // otherArray => ['c', 'b', 'a']
     
    
    //p:make a cop of each parameter, then reverse order , then for each array copy use splice
    //to remove current elements and add the elements from other array;
    
    let arrayCopyA = a.slice(0);
    let arrayCopyB = b.slice(0);
    
    arrayCopyA = arrayCopyA.reverse();
    arrayCopyB =arrayCopyB.reverse();
    
    let arrayTemp = arrayCopyA;
    
    arrayCopyA = a.splice(0,a.length,...arrayCopyB);
    arrayCopyB = b.splice(0,b.length,...arrayTemp)
  }