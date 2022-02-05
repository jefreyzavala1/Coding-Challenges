function ghostBusters(building) {

    //p: strings data types? string of words?empty string
    
    //r: return a string with no white spaces
    
    //e:
    let array =building.split('');
    if(array.includes(' ')){
      return 'Nope, there may still be a ghost in the building. Try again.'
    }else{
      return "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.'
    }
  }