// Find Digits
function findDigits(n) {
  return n.toString().split('').map(x => parseInt(x)).filter(x => n % x === 0).length
}
