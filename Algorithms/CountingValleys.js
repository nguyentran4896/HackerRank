// Counting Valleys
function countingValleys(n, s) {
  let ar = s.split('')
  let count = 0, base = 0, under, above
  ar.forEach(x => {
    under = base < 0
    base += x === 'U' ? 1 : -1
    above = base >= 0
    if (under && above) count++
  })
  return count
}
