let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(arr.map(value => value.length).filter(value => value % 2))



function oddLengths(array) {
  array.map(value => value.length).filter(value => value % 2)
}




console.log(oddLengths(arr)); // => [1, 5, 3]