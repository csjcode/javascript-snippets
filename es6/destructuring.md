### Destrucuring

* Works with Arrays and Objects

#### Examples

Given this code we can access properties,

```javascript

let person = {
  name:"Chris",
  age: 44,
  location:"San Diego"
};

```

For example    
> person.age // 44  
> person["age"] // 44

Or:

```javascript

let { age: personAge } = person;

console.log(personAge);
```
> 44


Here we can (1) call the key for the value, (2) declare the new variable, (3) declare object this is being extracted from

This shorthand will work too:

```javascript

let person = {
  name:"Chris",
  age: 44,
  location:"San Diego"
};

let { age } = person;

console.log(age);

```

We can grab multiple variables:

```javascript

let person = {
  name:"Chris",
  age: 44,
  location:"San Diego"
};

let { age, location:currentLocation } = person;

console.log(age,currentLocation);

```
> 44

> "San Diego"


NOTE: You cannot just use the location key because that is a global value.

You can also use this format:

```javascript
let person = {
  name:"Chris",
  age: 44,
  location:"San Diego"
};

let key = "age";

let { [key] : keyAge } = person;

console.log(keyAge);
```
> 44


Arrays:

```javascript
let numbers = [1,2,3,4];

let [first,second] = numbers;

console.log(first,second);
```
> 1  
> 2

You can skip some positions:

```javascript
let numbers = [1,2,3,4];

let [first,second,,fourth] = numbers;

console.log(first,second,fourth);
```
> 1  
> 2  
> 4

You can also use rest parameters

```javascript
let numbers = [1,2,3,4];

let [first,second,...theRest] = numbers;

console.log(first,second,theRest);
```
> 1  
> 2  
> [3, 4]

We'll see this such as in React Router:

```javascript
import { Router, Route, Link } from 'react-router'
```
