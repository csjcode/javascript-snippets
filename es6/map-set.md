### Map and Set in ES6

* note: this Map is different from the map function prototype

#### Examples

```javascript
const person = new Map();

person.set('name','Chris');

console.log(person.get('name'));

```

> Chris  


```javascript
const person = new Map();

person.set('name','Chris');
person.set('age','44');

console.log(person.get('name') + person.get('age'));

```

> Chris44   

You can also pass these in through an array:

```javascript
const person = new Map([
  ['name','Chris'],
  ['age','44'],

]);

console.log(person.get('name'));

```

> Chris  

Let's check out Sets, which are similar - sets are for unique values

```javascript
const locations = ["San Diego","New York"];

const locationSet = new Set(locations);

console.log(locationSet.has('San Diego'));

```

> true

  
