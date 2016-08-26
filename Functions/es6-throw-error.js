
// ES6 pattern to make a parameter field mandatory

function throwError() {
    throw new Error('Missing parameter');
}
function foo(param1 = throwError(), param2 = throwError()) {
    // do something
}
foo(10, 20);    // ok
foo(10);   // Error: missing parameter
