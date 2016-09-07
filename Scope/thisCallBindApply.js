/*

  When to use call, bind and apply & differences

  Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the funciton immediately, and modify the context.

  Call/apply call the function immediately, whereas bind returns a function that when later executed will have the correct context set for calling the original function. This way you can maintain context in async callbacks, and events.

  source: stackoverflow

*/


// call - attaches this into function and executes the function immediately:

var person = {
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello.call(person, "world");


// bind - attaches this into function and it needs to be invoked separately like this:

var person = {
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

var helloFunc = person.hello.bind(person);
helloFunc("world");  // output: "James Smith says hello world"

// also this will work

var helloFunc = person.hello.bind(person, "world");
helloFunc();  // output: "James Smith says hello world"



// apply - is similar to call except that it takes an array-like object instead of listing the arguments out one at a time:

function personContainer() {
  var person = {
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"
