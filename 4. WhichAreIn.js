// Instructions:

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []


function inArray(array1,array2){
  const matchingLetters = []

  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      const a1El = array1[x];
      const a2El = array2[i];
      if (a2El.includes(a1El)) {
        matchingLetters.push(a1El)
      }
    }
  }

  return matchingLetters.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
    const a1 = a.toLowerCase();
    const b1 = b.toLowerCase();

    if (a1 < b1) {
      return -1;
    }

    return 1;
  })
}

// Alternative Solutions

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

// some(): tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.


// Sort function
// -1 means that value1 is less than value2

// 0 means that value1 is equal to value2

// 1 means that value1 is greater than value2