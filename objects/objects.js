let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy']
}

const MyObj = {foo: "bar", qux: "yxz"}
MyObj.qux = "hey there"


// for (let prop in person) {
//   console.log(person[prop])
// }


let obj1 = {a: 1, b:2}
let obj2 = Object.create(obj1)
obj2.c = 3
obj2.d = 4

// for(let prop in obj2) {
//   console.log(obj2[prop])
// }

for (let prop in obj2) {
  if(obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop])
  }
}

//Objects.keys

let newPerson = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
}

let personKeys = Object.keys(newPerson)

personKeys.forEach(key => console.log(person[key]))


//Objects.values
let bobPerson = {name: 'Bob', age: 30, height: '6ft'}
let personValues = Object.values(bobPerson)
console.log(personValues)


//Object.entries
let bobTwoPerson = {name: 'Bob', age: 30, height: '6ft'}
console.log(Object.entries(bobTwoPerson))
//=> [ [ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ] ]


let objA = {a: 'foo'}

let objB = {a: 'bar'}

Object.assign(objA, objB)



