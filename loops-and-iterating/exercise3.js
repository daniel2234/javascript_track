// let counter = 1

//the boolean in the while loop is always going to true
//the counter increments by 1 and it equals to 2, but the test on line 10 will not pass due the counter not passing 2

while(counter = 1) {
  console.log(counter)
  counter += 1
  console.log(counter)
  if(counter > 2) {
    break
  }
}

