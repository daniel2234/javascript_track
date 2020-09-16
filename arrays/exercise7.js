let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  let sum = numbers.reduce((accumulator, currentValue) => (accumulator + (currentValue * currentValue)), 0)
  return sum
}


console.log(sumOfSquares(numbers)); // => 83