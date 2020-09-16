let myArray = [
  1,3,6,11,4,2,4,9,17,16,0,
]

let newArray = []

for (let i = 0; i < myArray.length; i++) {
  if(myArray[i] % 2 == 0){
    newArray[i] = 'even'
  } else {
    newArray[i] = 'odd'
  }
}

console.log(newArray)