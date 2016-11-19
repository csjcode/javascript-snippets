
// Basic example
var dtElem = document.getElementById("date");

// When you construct a new Date object, you can pass various parameters to the constructor to create a specific date:

var dt = new Date(milliseconds); // milliseconds since 1 January 1970 00:00:00 UTC
dtElem.innerHTML = "<p>" + dt + "</p>";

var dt2 = new Date(dateString); // string representing a valid date
dtElem.innerHTML = "<p>" + dt2 + "</p>";

var dt3 = new Date(year,month,date[,hour,minute,second,millisecond]);
dtElem.innerHTML = "<p>" + dt3 + "</p>";
