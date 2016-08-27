

// Arguments object snippet

function checkParams() {
    console.log(arguments[1], arguments[0], arguments[2]);
}
checkParams(2, 4, 6);  // 4 2 6


 // ES 6 - Argument object with rest parameter

 function checkParams(...params) {
    console.log(params[1], params[0], params[2]);    // 4 2 6
    console.log(arguments[1], arguments[0], arguments[2]);    // 4 2 6
}
checkParams(2, 4, 6);


// Sorting arguments with slice

function sort() {
    var a = Array.prototype.slice.call(arguments);
    return a.sort();
}
sort(40, 20, 50, 30);    // [20, 30, 40, 50]


// ES6 - sorting arguments with slice (es6 way)

function sort() {
    var a = Array.from(arguments);
    return a.sort();
}
sort(40, 20, 50, 30);    // [20, 30, 40, 50]

// Counting arguments

function countArguments() {
    console.log(arguments.length);
}
countArguments();    // 0
countArguments(10, null, "string");    // 3

// ES6 - requiring a certain length of parameters

function foo(...params) {
  if (params.length < 2) {
        throw new Error("This function expects at least two arguments");
    } else if (params.length === 2) {
        // do something
    }
}







//
