// Instructions: 

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

function narcissistic(value) {
  const valStr = value.toString();
  const length = valStr.length;
  return valStr.split('').map(Number).reduce((acc, curr) => acc + Math.pow(curr, length), 0) === value;
}

// Alternative Solution
function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}

// Notes:
// convert number to string to get its value
// then convert string into an array 
// split the numbers to get each individual digit