# is-odd-no-deps
satirical package based on is-odd but with no dependencies
NOTE that this package is barely faster than is-odd and is probably less fully featured
so use at you're own risk

tested in cli
```js
const isOdd1 = require('is-odd-no-deps');
const isOdd2 = require('is-odd');
function callFunc(func,value) {
    console.time('func call');
    func( value );
    console.timeEnd('func call');
}
callFunc(isOdd1, 1);
// func call: 0.172ms
callFunc(isOdd2, 1);
// func call: 0.176ms
callFunc(isOdd1, 2);
// func call: 0.006ms
callFunc(isOdd2, 2);
// func call: 0.014ms
```

## useage
```js
const isOdd = require('is-odd-no-deps');
isOdd(2);
>>> false
isOdd(1);
>>> true;
```

## building
```bash
$ npm i is-odd-no-deps
```
