### Arrow Functions

* Inspired by CoffeeScript

#### Examples

```javascript

let add = (a,b) => {
  return a+b;
}

console.log(add(5,4));


```

> 9

This can be shortened on simple Functions

```javascript
let add = (a,b) => a+b;
console.log(add(5,4));
```

> 9

This shorthand removes the braces and return

```javascript
let numbers = [1,5,22,67];

let doubled = numbers.map((number)=>number*2);

console.log(doubled);
```

> [2, 10, 44, 134]

Using the function shorthand with map

```javascript
let numbers = [1,5,22,67];

let doubled = numbers.map(number => number*2);

console.log(doubled);
```

> [2, 10, 44, 134]

Using the function shorthand with map, removing the parantheses



```javascript
let person = {
  name: "Chris",
  sayName: function(){
    console.log(`Hi, I am ${this.name}`);
  }
}

person.sayName();
```
> "Hi, I am Chris"

Usage of normal function in object. If you change into fat arrow syntax it will give an error. However you can change it to `sayName(){`


```javascript
let person = {
  name: "Chris",
  hobbies:['MMA','Muay Thai', 'JS'],
  showHobbies: function(){
    this.hobbies.forEach(function(hobby){
      console.log(`${this.name} likes ${hobby}`);
    })
  }
}
person.showHobbies();
```
> "JS Bin Output  likes MMA"

This generates an error because the scope has changed. This can be fixed with a fat arrow function

```javascript
let person = {
  name: "Chris",
  hobbies:['MMA','Muay Thai', 'JS'],
  showHobbies: function(){
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    })
  }
}

person.showHobbies();

```
> "Chris likes MMA"

Fat arrow function fixes scoped. If you cannot use the fat arrow, outside the forEach you can specify `slef = this`;
