function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max- min + 1) + min)
}

let tries = 0
let result = randomNumberBetween(1, 6)
tries += 1

while(result <= 2) {
  result = randomNumberBetween(1,6)
  tries += 1
}

console.log(`It took ` + String(tries) + ` trie(s) to get a number greater than 2`)

//to do