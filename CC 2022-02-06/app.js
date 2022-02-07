function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
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