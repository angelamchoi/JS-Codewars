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

// Notes

// charCodeAt() -> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

//String.fromCharCode() -> The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
// ex: String.fromCharCode(65, 66, 67); // returns "ABC"