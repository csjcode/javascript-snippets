
console.log("Basic default parameters\n")

// Basic default parameters

function foo1(param1, param2) {
   param1 = param1 || 10;
   param2 = param2 || 10;
   console.log(param1, param2);
}
foo1(5, 5);  // 5 5
foo1(5);    // 5 10
foo1();    // 10 10

// Basic default parameters - another way

function foo2(param1, param2) {
  if(param1 === undefined){
    param1 = 10;
  }
  if(param2 === undefined){
    param2 = 11;
  }
  console.log(param1, param2);
}
foo2(0, null);    // 0, null
foo2();    // 10, 11

// ES6 - default parameters

function foo(a = 10, b = 11) {
  console.log(a, b);
}
foo(5);    // 5 11
foo(0, null);    // 0 null

// ES6 - default paramater can be a function

function myParam() {
    alert("myParam was called");
    return 3;
}
function add(param1, param2 = myParam()) {
    return param1 + param2;
}
add(2, 5);     // 10
add(2);     // 6 (also displays an alert dialog)

// ES6 - default paramter can refer to other parameters

function myFunction(a=10, b=a) {
     console.log('a = ' + a + '; b = '  + b);
}
myFunction();     // a=10; b=10
myFunction(22);    // a=22; b=22
myFunction(2, 4);    // a=2; b=4
















//
