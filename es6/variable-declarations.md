

### Using let vs. var vs. const

1. "let" is a blockscoped version of "var"
1. In the past, constants were capitalized LIKE_THIS = 1, however were still mutable like a var. Now, this is replace by "const".
1. "const" is similar to let but must be initialized immediately with a value
1. Variables with "let" are mutable, with "const" immutable.
1. Pitfall: a "const" object value is still mutable
1. Pitfall: with const an object within the object is still mutable  
1. 4 block scoped variable declaratons: let, const, function, class


#### Examples

```javascript
{
  let item = "Book";
}

console.log(item);
```

> (none), error

Variable with "let" is only available in function.


```javascript
function sayItem() {
  var item = "Laptop";
}

sayItem();
console.log(item);
```

> (none)

Variable is only available in function.

```javascript
if (true){
  let item = "Apple";
}

console.log(item);
```

> error - undefined

Variable with "let" is only available in function.

```javascript
if (true){
  var item = "Apple";
}

console.log(item);
```

> "Apple"

Variable with "var" is available outside function.


```javascript
for (var i = 0; i<100; i++){
   console.log(i);
}
console.log(i-10);
```

In this case, variable i is available outside of the for loop

```javascript
for (let i = 0; i<100; i++){
   console.log(i);
}
console.log(i-10);
```

In this case, variable i is NOT available outside of the for loop
