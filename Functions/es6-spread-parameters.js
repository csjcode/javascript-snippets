
console.log("ES6 - Examples of Parameters with Spread & Rest and \n")


// Array Param - Passing an array as arguments to a function

var myArray = [5, 10, 60];
Math.max(myArray);    // Error: NaN
var applyx = Math.max.apply(Math, myArray);    // 60
console.log(applyx);

// ES6 - Spread operator - no londer need apply

var myArray = [5, 10, 65];
var spr1 = Math.max(...myArray);    // 50
console.log(spr1);

// Try Spread with string

var myArray2 = ['test', 'computer', 'web'];
var spr2 = Math.max(...myArray2);    // NaN
console.log(spr2);

// More advanced Spread example
// used inside function argument
// note: supported in Chrome, Firefox, Edge

function myFunction() {
  for(var i in arguments){
    console.log(arguments[i]);
  }
}
var params = [10, 15, 20, 50];
myFunction(5, ...params, 20, ...[25]);


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











//
