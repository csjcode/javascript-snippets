

// [src: colintoh.com blog]

// WITHOUT indexOf

var arr = ['apple','orange','pear'],
	found = false;

for(var i= 0, l = arr.length; i< l; i++){
	if(arr[i] === 'orange'){
		found = true;
	}
}

console.log("found:",found);


//////////////////////////////////////////
// WITH indexOf
//////////////////////////////////////////


var arr = ['apple','orange','pear'];

console.log("found:", arr.indexOf("orange") != -1);









//
