
// Most basic scope example posible


var test = "I'm global";

function testScope() {
  var test = "I'm local";

  console.log (test);
}

testScope();           // output: I'm local
console.log(test);     // output: I'm global


// Note the scope variable is reassigned in this example

var test = "I'm global";

function testScope() {
  test = "I'm local";
  console.log(test);
}

console.log(test);     // output: I'm global
testScope();           // output: I'm local
console.log(test);     // output: I'm local (the global variable is reassigned)



// Lexical (static) scope.

var locales = {
  europe: function() {          // The Europe continent's local scope
    var myFriend = "Monique";

    var france = function() {   // The France country's local scope
      var paris = function() {  // The Paris city's local scope
        console.log(myFriend);
      };

      paris();
    };

    france();
  }
};

locales.europe();

// output: Monique


/*

"To make things clear let’s use a simple metaphor. Every country in our world has frontiers. Everything inside these frontiers belongs to the country’s scope. In every country there are many cities, and each one of them has its own city’s scope. The countries and cities are just like JavaScript functions – they have their local scopes. The same is true for the continents. Although they are huge in size they also can be defined as locales. On the other hand, the world’s oceans can’t be defined as having local scope, because it actually wraps all local objects – continents, countries, and cities – and thus, its scope is defined as global."

The JavaScript interpreter works from the currently executing scope and works it way out until it finds the variable in question. If the variable is not found in any scope, then an exception is thrown.

In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer.

src: sitepoint/demystifying-javascript-variable-scope-hoisting/

*/
