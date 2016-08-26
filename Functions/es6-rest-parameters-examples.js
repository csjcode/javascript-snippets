
// Rest parameters

function myFunction2(...options) {
     return options;
}
myFunction2('a', 'b', 'c');      // ["a", "b", "c"]

// Rest with variadic function (a function that accepts a variable number of arguments)

// Problem: not obvious it takes multiple argument and  iteration must start from 1 instead of 0, because arguments[0] points to the first argument."


function checkSubstrings(string) {
  for (var i = 1; i < arguments.length; i++) {
    if (string.indexOf(arguments[i]) === -1) {
      return false;
    }
  }
  return true;
}
checkSubstrings('this is a string', 'is', 'this');   // true


// Try the same with a spread parameter

function checkSubstrings(string, ...keys) {
  for (var key of keys) {
    if (string.indexOf(key) === -1) {
      return false;
    }
  }
  return true;
}
checkSubstrings('this is a string', 'is', 'this');   // true
