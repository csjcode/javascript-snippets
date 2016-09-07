/*


    All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.

    Functions are hoisted first, and then variables.

    Function declarations have priority over variable declarations, but not over variable assignments.



var state;             // variable declaration
state = "ready";       // variable definition (assignment)
var state = "ready";   // declaration plus definition

example 1 - undefined
console.log(state);   // output: undefined
var state = "ready";

example 1 - undefined
var state;           // moved to the top
console.log(state);
state = "ready";     // left in place

Learn the difference between function declaration and function expression.

function showState() {}          // function declaration
var showState = function() {};   // function expression

Function declarations are hoisted completely. This means that the entire function’s body is moved to the top.

Only the function declaration is hoisted, but the function expression is not


showState();            // output: Ready

function showState() {
  console.log("Ready");
}

var showState = function() {
  console.log("Idle");
};


*/



function showState() {     // moved to the top (function declaration)
  console.log("Ready");
}

var showState;            // moved to the top (variable declaration)

showState();

showState = function() {   // left in place (variable assignment)
  console.log("Idle");
};


// src: sitepoint:/demystifying-javascript-variable-scope-hoisting/
