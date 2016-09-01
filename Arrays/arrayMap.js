
// The map() method creates a new array with the results of calling a function for every array element. [src: mdn]


var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);

// on Webapge [src: w3schools]

var numbers = [4, 9, 16, 25];

function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
}


// Mapping an array of numbers using a function containing an argumen

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]


// Using map generically querySelectorAll

var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});

// Using map to reverse a string

var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome
