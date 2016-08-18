


// Create an object - jsjavascript

var myObject = new Object(); // verbose
var myObject = {}; // shorter

// Add to an object (old)

var obj = {};
obj["firstName"] = "Joe";
obj["lastName"] = "Smith";

// Add to an object

var obj = {};
obj.firstName = "Joe";
obj.lastName = "Smith";

// Reading an object

console.log('Object value: ' + obj.firstName); // Joe

// Nested Objects

person = {
  name: {
  first: "Joe",
  last: "Smith"
  }
};
person.name.first; // returns "Joe"
person.name.last; // returns "Smith"

console.log('Nested object value: ' + person.name.first);

// Nested Objects - assigned

var person;
person = {};
person.name = {};
person.name.first = "Joe";
person.name.last = "Smith";

// Test if Object is defined

var MyBook = MyBook || {};

// Looping through object
console.log("\nLooping through object\n")

var data, key;
data = {
  firstName: "George",
  lastName: "Washington",
  occupation: "President"
};
for (key in data) {
  console.log(key + " is " + data[key]);
}

// Looping through object - verify correct object
console.log("\nLooping through object - verify correct object\n")

var data, key;
data = {
  firstName: "George",
  lastName: "Washington",
  occupation: "President"
};
for (key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(key + " is " + data[key]);
  }
}


















// end
