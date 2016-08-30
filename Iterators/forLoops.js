

// For loop

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

console.log(text);

// For loop with many values in the statement

for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

console.log(text);

// For in loop of object

var person = {fname:"John", lname:"Doe", age:25};
var text = "";
var x;
for (x in person) {
    text += person[x];
}

console.log(text);

// ES6 - For... of loop of object


let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
