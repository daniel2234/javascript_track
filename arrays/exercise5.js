let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


function removeNonInteger(arr) {
  newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr
}



let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]


