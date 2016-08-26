
// Basic Function

function sayHello() {
  console.log("Hello, world!");
}

sayHello();

// Basic Function with method

function sayHelloMsg(msg) {
  console.log(msg);
}

sayHelloMsg("Hello");

// Function scope - out of scope

function hi() {
  var hello = "hello"
};

hi();
// console.log(hello)

// Function scope - variables from parent function

function fullName() {
  var firstName = "Joe";
  function alertFullName() {
    var lastName = "Smith";
    console.log("Full name: " + firstName + " " + lastName);
  }
  alertFullName();
}

fullName();


// Function scope - variables from ALL parent functions


// Declaring a global variable and giving it the value "a"
var a = "a";

function levelb() {
    // Declaring a variable that levelb and children can see
    var b = "b";

    function levelc() {

        // Declaring a variable only levelc and leveld can see
        var c = "c";

        function leveld() {
            // Declaring a variable only leveld can see
            var d = "d";
            console.log("leveld", a, b, c, d);
        }
        // Running leveld() will output a, b, c and d
        leveld();
        console.log("levelc", a, b, c);
    }
    // Running levelc() will output a, b, and c
    levelc();
    console.log("levelb", a, b);
}
// Running levelb() will output a and b
levelb();
// Only the variable named "a" is available globally
console.log("global", a);



// Functions - Hoisting


// Functions - Declaration, Expression and Constructor

// declaration
function sayHello1() {
  console.log("Hello");
}
// expression
var sayHello2 = function() {
  console.log("Hello");
};
// constructor (not recommended)
var sayHello3 = new Function("console.log('Hello')");


// Function - Arguments

function person(firstName, lastName, age) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}
person("Chris", "Smith", 34);

// Function - Arguments Length (concatenate example)

function concatenate() {
    var i, str;
    str = "";
    // console.log(arguments.length);
    for (i = 0; i < arguments.length; i += 1) {
        str += arguments[i];

    }
    return console.log(str);
}
concatenate("Christopher"," - ","Smith");







// end
