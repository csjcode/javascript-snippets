### Template string and template literals

1. Replace quites with backticks to do multiline
1. Improved concatenation, backtick and variable in ${}


#### Examples

```javascript

let item = `Book`;
console.log(item);

```

> "Book"

```javascript

let item = `Book
this is a new line`;

console.log(item);

```

>"Book
>this is a new line"

Replace quotes with backticks to do multiline

```javascript
let firstName = `Chris`;
let lastName = `St. John`;

console.log(`My name is ${firstName} ${lastName}`);
```
> "My name is Chris St. John"

Backticks in console log with $ and curly brackets. No need for firstName + lastName


```javascript
let person = {
  firstName: 'Chris',
  lastName: 'St. John',
  sayName(){
    return `My name is ${this.firstName} ${this.lastName}`
  }
}

let name = person.sayName();

console.log(name);
```
> "My name is Chris St. John"
