/* Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, 
for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020. */

function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)

  //p:arrays? objects? array of objects?all values are string types except age

  //r:array of objects representing dev with new prop of username,which will have a string value

  //e: firstName:'Emily', lastName:'N.',age:30==,
  //   username:'emilyn1990'
  //   firstName:'Nor', lastName:'E.', age:20,
  //   username:'nore2000'

  //p:iterate over the array using for each or for loop, and with each iteration we are going
  // to target the age, first name and last name
  //create a date variable to then subtract the year with the age
  //spread the dev,object create a new prop with username and concat the first name last name and year.
  const thisYear = new Date().getFullYear();
  list.forEach((dev) => {
    let username = "";
    let lowerFirstName = dev.firstName.toLowerCase();
    let lastNameFirstLetter = dev.lastName[0].toLowerCase();
    let age = thisYear - dev.age;
    username = lowerFirstName + lastNameFirstLetter + age;
    dev.username = username;
  });
  return list;
}
