let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
let upperNames = []
let index = 0

while(index < names.length) {
  let upperCaseName = names[index].toUpperCase()
  upperNames.push(upperCaseName)
  index += 1
}

console.log(upperNames) //
console.log(names)

//do/while loop

let answer

do {
  answer = prompt("Do you want to do that again?")
} while(answer === 'y')


let classNames = ['Daniel', 'Teeshaun', 'Taheed', 'Pete']
let upperBoundNames = []

for (let index = 0; index < classNames.length; index += 1) {
  let upperCaseName = classNames[index].toUpperCase()
  upperNames.push(upperCaseName)
}

console.log(upperBoundNames)


//Controlling Loops
let newNames = ['Chris', 'Tevib', 'Ahmed', 'Mike', 'Elena']
let capNames = []

for (let index = 0; index < newNames.length; index += 1) {
  if (newNames[index] == 'Mike') {
    continue;
  }

  let capCaseName = newNames[index].toUpperCase()
  capNames.push(capCaseName)
}

let newNames = ['Chris', 'Tevib', 'Ahmed', 'Mike', 'Elena']
let capNames = []

for (let index = 0; index < newNames.length; index += 1) {
  if (newNames[index] !== 'Mike') {
    let capCaseName = newNames[index].toUpperCase()
    capNames.push(capCaseName)
  }
}

console.log(capNames)

