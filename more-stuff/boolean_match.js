function has_a_or_e(string) {
  let results = string.match(/[ae]/g)
  if(results) {
    console.log(`We have a match! ${results}`)
  } else {
    console.log(`No match here`)
  }
}