// modify the age.js program


let rlSync = require('readline-sync')
let age = Number(rlSync.question('How old are you? '))
console.log(`You are ${age} years old`)
let ten = 10


for(let i = 0; i < 4 ;i++){
  console.log(`In ${ten += 10} years, you will be ${age += ten} years old.`)
}