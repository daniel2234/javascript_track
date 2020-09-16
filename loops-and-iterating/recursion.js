function doubler(number) {
  console.log(number * 2)

  if(number <= 50) {
    doubler(number * 2)
  }
}

doubler(5)

