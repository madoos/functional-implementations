# madoos-functional-implementations

_Functional implementations based on Ramda and the functional programming book of Michael Fogus._

## Getting Started

To install:

    npm i --save madoos-functional-implementations

In your project:

``` javascript

    const fImp = require('madoos-functional-implementations');

    const get = fImp.rightCurry((obj, prop) => obj[prop])
    const getFoo = get('foo')

    getFoo({foo: 'baz'}) // => baz

```

## Methods

  * `.memoize`
  * `.transformArgs`
  * `.curry`
  * `.rightCurry`
  * `.dispatch`
  * `.flip`
  * `.compose`

### .memoize(fn[Funtion])

_Cache the result Of the function passed as argument._

```javascript

const fibonacci= (n) => {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2) 
}

const cacheFibonacci = fImp.memoize(fibonacci);

cacheFibonacci(20); //=> 6765


```

### .transformArgs(fn[Funtion], tranform[Function], ....)

_Transforms the arguments of the first function positionally with the other functions passed as argument._

```javascript

const getFoo = (obj) => obj[foo];
const isFoo = fImp.transformArgs((val) => val === 'foo', getFoo);

isFoo({ foo: 'baz'}) //=> false

```

### .curry(fn[Funtion])

_Apply curryfication to the function passed as argument._

```javascript

const get = fImp.cury((key, obj) => obj[key]);
get('foo')({foo: 'baz'}) // => baz

```

### .rightCurry(fn[Funtion])

_Apply curryfication from the right._

```javascript

const get = fImp.rightCurry((obj, key) => obj[key]);
get('foo')({foo: 'baz'}) // => baz

```

### .dispatch(fn1[Funtion], fn2[Funtion], ...)

_Returns a function that executes the passed functions as argimento if it returns undefined._

```javascript

const strinReverse = (s) => {
    if(typeof s === 'string') return s.split('').reverse().join('');
    
}

const arrayReverse = (a) => {
    if(Array.isArray(a)) return a.reverse();
}

const reverse = fImp.dispatch(strinReverse, arrayReverse);

reverse('abc') // => 'cba'
reverse([1, 2, 3]) // => [3, 2, 1]

```

### .flip(fn[Funtion])

_Returns a function that is executed with the reverse order in the arguments._

```javascript

const concat = (a, b) => `${a} ${b}`
const concatReverse = fImp.flp(concat);

concat('hello', 'world'); // => hello world
concatReverse('hello', 'world') // word hellow

```

### .compose(fn1[Funtion], fn2[Function], ...)

_Returns a function that executes the function composition._

```javascript



const nums = [1, 2, 3]
const sumTwo = (n) => n + 2
const double = (n) => n + n

nums.map(sumTwo).map(double) // => [6, 8, 10]

const doubleAddTwo = fImp.compose(double, sumTwo)
nums.map(doubleAddTwo) // => [6, 8, 10]

```

## Run test

 * `npm test`
 * `npm run test:linter:show`
 * `npm run test:unit:show`
 * `npm run test:cover:show`

## Run test and generate report files

 * `npm run test:report`
 * `npm run test:linter:report`
 * `npm run test:unit:report`
 * `npm run test:cover:report`