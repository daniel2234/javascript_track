let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
]

allMatches(words, /lab/)


function allMatches(array, regex) {
  let newArray = []
  for(let index = 0; index < array.length; index += 1) {
    if (pattern.test(array[index])) {
      newArray.push(array[index])
    }
  }
}