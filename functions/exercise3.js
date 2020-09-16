let rlReadline = require('readline-sync')

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber
}

let firstNumber = rlReadline.question('Enter the first number: ')
let secondNumber = rlReadline.question('Enter the second number: ')

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)