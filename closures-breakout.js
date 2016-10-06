'use strict';

// PERSON ==> { name: STRING, age: INT }

//THE FIRST WAY WE STARTED WITH DOING IT: defining a function for printing each key

// const printName = function(person){
//   console.log(person.age);
// }

// const printAge = function(person){
//   console.log(person.age);
// }

//******REFACTORED, with ONE function
// Think of this as current Facebook (newsfeed or whatever) compared to old HTML pages that edit at code level
const generatePrintFunc = function(key){
    return function(person){
      console.log(person[key]); /* [key] instead of always using "person['age'], person['name'], etc */
    }
}

const people = [{
  name: 'Jane',
  age: 25
}, {
  name: 'John',
  age: 24

}];

// print all names using forEach

people.forEach(generatePrintFunc('name'));
console.log("---------");
people.forEach(generatePrintFunc('age'));

// So this setup is basically ESSENTIAL to understanding all of JavaScript!!! May not come immediately, but it will