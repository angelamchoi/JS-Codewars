// Instructions:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


function validParentheses(parens) {
  let result = 0;

  for (let i = 0 ; i < parens.length && result>= 0; i++) {
    result+= (parens[i] == '(') ? 1 : -1;    
  }

  return (result == 0);
}