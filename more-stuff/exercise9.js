function isNegativeZero(value) {
  return 1 / value === -Infinity
}


function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity)
}