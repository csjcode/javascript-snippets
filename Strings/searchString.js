require("babel-register");

//1a. Basic find function in E5
var str = "This is my string to search";
var searchStr = "string";
var pos = function(totalStr,stringToSearch){ return str.indexOf(stringToSearch) };

console.log(pos(str,searchStr));

//1b. Basic find function in  E6
// var es6pos = (totalStr,stringToSearch) => str.indexOf(stringToSearch);
// console.log(es6pos(str,searchStr));
