# is-odd-no-deps
satirical package based on is-odd but with no dependencies
NOTE that this package is slower than is-odd

tested in cli
```js
> function callFunc(func) {
... console.time('func call');
... console.log(func(1));
... console.timeEnd('func call');
... }
undefined
> callFunc(isOdd1);
true
func call: 1.011ms
undefined
> const isOdd2 = require('is-odd');
undefined
> callFunc(isOdd2);
true
func call: 0.490ms
undefined
>
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
