let greetingMessage = 'Good Morning!'
console.log(greetingMessage)

function greetPeople() {
  console.log(greetingMessage)
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage
}

changeGreetingMessage('Good Evening')
greetPeople()

function greetPeople() {
  let greetingMessage = 'Good Morning'
  console.log(greetingMessage)


//Mutating the Caller

let name = 'Pete hanson'
console.log(name.toUpperCase())
console.log(name)


let oddNumbers = [1,3,5,7,9]
oddNumbers.pop()
console.log(oddNumbers)

function changeFirstElement(array) {
  array[0] = 9
}

let oneToFive = [1,2,3,4,5]
changeFirstElement(oneToFive)

console.log(oneToFive) // logs [9,2,3,4,5]


function addToArray(array) {
  return array.concat(0)
}

console.log(addToArray(oneToFive))


(function greetPeople() {
  console.log('Good Morning')
})


function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`)
  }
}

let greetPeople = () => console.log('Good Morning')
greetPeople()


let add = (a,b) => a + b
let getNumber = text => {
  let input = prompt(text)
  return Number(input)
}

let number1 = getNumber('Enter a number: ')
let number2 = getNumber('Enter another number: ')
console.log(add(number1, number2))


//Run this code in yout browser

let add = (a,b) => a + b
let getNumber = text => {
  let input = prompt(text)
  return Number(input)
}

let number1 = getNumber(' Enter a number: ')
let number2 = getNumber('Enter another number: ')
console.log(add(number1, number2))



