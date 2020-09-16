function say(words) {
  console.log(words)
}

say("hello")
say("hi")
say("how are you")
say("i'm fine")


function add(a, b) {
  return a + b
}

let twoAndThree = add(2, 3)
console.log(twoAndThree)

//default parameters
// function say(words = 'hello') {
//   console.log(words + '!')
// }

// say('Howdy')


function foo() {
  function bar() {
    console.log("BAR")
  }
  bar()
  bar()
}

foo()
bar()