// The filter() method - new array with all elements that pass the test implemented by the provided function. [src: colintoh.com blog]

//////////////////////////////////////////
//  WITHOUT filter()
//////////////////////////////////////////

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];

var newArr = [];

for(var i= 0, l = arr.length; i< l; i++){
    if(arr[i].name === "orange" ){
		newArr.push(arr[i]);
	}
}

console.log("Filter results:",newArr);



//////////////////////////////////////////
// WITH filter()
//////////////////////////////////////////

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];

var newArr = arr.filter(function(item){
    return item.name === "orange";
});


console.log("Filter results:",newArr);
