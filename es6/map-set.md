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

Let's check out Sets, which are similar - sets are for unique values.  

**Set objects are collections of values**. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection. Because each value in the Set has to be unique, the value equality will be checked.

```javascript
const locations = ["San Diego","New York"];

const locationSet = new Set(locations);

console.log(locationSet.has('San Diego'));

```

> true

You can add a to the Set

```javascript
const locations = ["San Diego","New York"];

const locationSet = new Set(locations);

locationSet.add('Miami');

console.log(locationSet.has('Miami'));

```

> true


Back to Map, you can get the size of the Map

```javascript
const person = new Map([
  ['name','Chris'],
  ['age','44'],

]);

console.log(person.size);

```

> 2  

We can iterate through these elements with the forEach or for-of loop

```javascript
const person = new Map([
  ['name','Chris'],
  ['age','44'],

]);

person.forEach((value,key) => {
  console.log(value,key);
});



```

> Chris name  
> 44 age


For of loop includes a new iterator protocol (generator) which implements the next method

```javascript
const person = new Map([
  ['name','Chris'],
  ['age','44'],

]);

for (let key of person.keys()){
  console.log(key)
}

```

> name  
> age








x
