// Instructions: 
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
  let first = array[0].charCodeAt(0)
  for (let i = 0; i <array.length; i++) {
    if (first + i != array[i].charCodeAt(0)){
      return String.fromCharCode(first + i)
    }
  }
}

// charCodeAt() -> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

//String.fromCharCode() -> The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
String.fromCharCode(65, 66, 67); 
// returns "ABC"


// Alternative Solution
function findMissingLetter(array){
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
}

// indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf example
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// 1

console.log(beasts.indexOf('giraffe'));
// -1

//slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// ["camel", "duck"]

// Find():  method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// 12



