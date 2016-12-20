### Rest Parameters and Spread Operator

* Parameter handling has been significantly upgraded in ECMAScript 6. It now supports parameter default values, rest parameters (varargs) and destructuring.

* In function and constructor calls, the spread operator turns iterable values into arguments

`Math.max(-1, 5, 11, 3)`

>11

`Math.max(...[-1, 5, 11, 3])`
>11


#### Examples

Get arguments in the function (note: arguments function does not work in fat arrow functions, it's lexically scoped)

```javascript

let sum = function(){
  console.log(arguments);
};

sum(2,5,88,103);


```

> [object Arguments] {  0: 2,  1: 5,  2: 88,  3: 103}



```javascript
let sum = function(){
  return Array.prototype.reduce.call(arguments,(prev,current) => {
     return prev + current;
  });
};

console.log(sum(2,5,88,103));
```
> 198

Basic example of rest parameter - it gives us an array

```javascript
let sum = function(...args){
  console.log(args);
};

console.log(sum(1,3,6,7));
```
> [1, 3, 6, 7]
> undefined


Fat arrow example of rest parameter - it gives us an array

```javascript
let sum = function(...args){
  return args.reduce((prev,curr) => prev + curr);
};

console.log(sum(1,3,6,7));
```
> 17



Using the rest parameter with the first argument specified

```javascript
let multiply = (mul, ...numbers) => {
  console.log(mul,numbers);
};

multiply(2,1,3,4,7)
```
> 2
> [1, 3, 4, 7]

Rest parameter with actual results (map) & fat arrow

```javascript
let multiply = (mul, ...numbers) => {
  return numbers.map((n) => {
    return mul * n;
  });
};

let result = multiply(3,1,3,4,7);

console.log(result);
```
> [3, 9, 12, 21]


Get highest number in an array

```javascript
let max = Math.max(4,6,3,8);

console.log(max);
```
> 8

Unfortunately this doesn't work

```javascript
let numbers = [4,6,3,8];
let max = Math.max(numbers);

console.log(max);
```
> Nan


Add the apply method and null and it works!

```javascript
let numbers = [4,6,3,8];
let max = Math.max.apply(null,numbers);
console.log(max);
```
> 8

Same thing but with the spread operator

```javascript
let numbers = [4,6,3,8];
let max = Math.max(...numbers);
console.log(max);
```
> 8


Concatenate an array, normally

```javascript
let numbers = [4,6,3,8];
let newNumbers = [3,4,6,7,2];
let concatArray = newNumbers.concat(numbers);
console.log(concatArray);
```
> [3, 4, 6, 7, 2, 4, 6, 3, 8]

Concatenate an array with the spread operator

```javascript
let numbers = [4,6,3,8];
let newNumbers = [3,4,6,7,2,...numbers];
console.log(newNumbers);
```
> [3, 4, 6, 7, 2, 4, 6, 3, 8]

Same but in another part of the array - concatenate an array with the spread operator

```javascript
let numbers = [4,6,3,8];
let newNumbers = [3,4,6,...numbers,7,2,];
console.log(newNumbers);
```
> [3, 4, 6, 4, 6, 3, 8, 7, 2]
