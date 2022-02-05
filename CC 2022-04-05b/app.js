function ghostBusters(building) {
  //p: strings data types? string of words?empty string

  //r: return a string with no white spaces

  //e:"Skyscraper" == "Skyscraper"

  //p: trim(), replace, use method to iterate over the phrase and identify the white spaces and remove it.
  let arrayOfLetters = building.split("");

  const space = arrayOfLetters.includes(" ");

  return space
    ? arrayOfLetters.filter((el) => el !== " ").join("")
    : "You just wanted my autograph didn't you?";
}
