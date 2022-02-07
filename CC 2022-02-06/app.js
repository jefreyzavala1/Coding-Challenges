function findOddNames(list) {
  
    //p:an array of objects
    
    //r:an array of objects that consists of elements where the ascci value of firsname is odd
    
    //e:{ firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
   // { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]=>
   // { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]
    
    //p:have an array that will hold all objects, then for each object in the list,extract the firsname and iterate over it
    //using a forloop and summ its ascci if at the end the sum is odd push onto the array of objects finally return array.
    let obj = [];
    
    list.forEach(name=>{
      let first = name.firstName;
      let countOdd = 0;
      for(let i = 0;i<first.length;i++){
        countOdd+=first.charCodeAt(i);
      }
      if(countOdd%2!=0){
        obj.push(name);
      }
    })
    return obj;
  }

  const list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];

  console.log(findOddNames(list1));/* [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ] */
  
  const list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  ];

  console.log(findOddNames(list2));//[]