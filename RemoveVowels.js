// Instructions: Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Notes: 
// g -> global
// i -> case insensitive
// replace 
// -> The replace() method searches a string for a value or a regular expression.
// -> The replace() method returns a new string with the value(s) replaced.
//-> The replace() method does not change the original string.