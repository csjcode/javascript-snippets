
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











//
