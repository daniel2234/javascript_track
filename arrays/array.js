let array = [1,2,3]
array.forEach(function(num){
  console.log(num)
})


// let numbers = [1,2,3,4]
// let square = []
// numbers.forEach(num => squares.push(num * num))


// let numbers = [1,2,3,4,5,6,7,8,9,10,1,2]


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for(let i = 0; i < arr1.length; i+= 1) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // logs true
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // logs false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // logs false

console.log(arraysEqual([1,2,[3,4], 5], [1,2,[3,4], 5])) // log false

//Method Chaining

let str = 'Pete Hanson'
let names = str.toUpperCase().split().reverse().join(', ')
console.log(names)