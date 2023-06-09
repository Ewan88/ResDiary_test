## ResDiary Tech Test

Given an array of length >= 0 and a positive integer N: return the contents of the array divided into N equally-sized arrays.

Where the size of each array cannot be divided equally by N, the final part should have a length equal to the remainder.

Example:
```js
groupItems([1, 2, 3, 4, 5,], 3);

// [[1, 2,], [3, 4,], [5]]
```

## How to run

- install [nodejs](https://nodejs.org/en) v.18.16
- run `node ./test.js` from command line

Modify value for `ITEMS` to the desired array, and the value for `GROUPS` to the desired number of groups