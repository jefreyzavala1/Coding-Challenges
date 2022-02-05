function ghostBusters(building) {

    //p: strings data types? string of words?empty string
    
    //r: return a string with no white spaces
    
    //e:"Skyscraper" == "Skyscraper"
  
    //p: trim(), replace, use method to iterate over the phrase and identify the white spaces and remove it.
   let arrayOfLetters  = building.split('')
   arrayOfLetters = arrayOfLetters.filter(letters=> letters!=' ')
    return arrayOfLetters.join('')
  }