// WITH indexOf [src: colintoh.com blog]

var arr = ['apple','orange','pear'];

console.log("found:", arr.indexOf("orange") != -1);

// Finding all the occurrences of an element [source: MDN]

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
