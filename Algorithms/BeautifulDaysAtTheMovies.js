// Beautiful Days at the Movies
function beautifulDays(i, j, k) {
  let count = 0
  for (let day = i; day <= j; day++) {
    if ((day - reverseDay(day)) % k === 0) count++
  }
  return count
}

function reverseDay(day) {
  return parseInt(day.toString().split('').reverse().join(''))
}
