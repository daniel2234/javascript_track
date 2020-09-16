function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length)
}

//split the string and then reverse it, and then return an array of count of the string


console.log(doSomething('racecar'))