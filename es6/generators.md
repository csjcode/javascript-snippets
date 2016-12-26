### Generators

* A function type in ES6 that allows us to pause execution of the function call. This is for control flow purposes

#### Examples

The following is a very basic generator

Start an index.html file witht eh following in a script.js file:

```javascript

function* myGenerator() {
  console.log('HI');
  yield
  console.log('BYE')
}

```

> let myFirstGen = myGenerator();  
> undefined  
> myFirstGen.next();  
> HI  script.js:2:3  
> Object { value: undefined, done: false }  
> myFirstGen.next();  
> BYE  script.js:4:3  
> Object { value: undefined, done: true }  

Notice that the done value changes
