// Breaking the Records
function breakingRecords(scores) {
  let max = -1, min = 1000000000, countMin = -1, countMax = -1
  scores.forEach(x => {
    if (x > max) {
      max = x
      countMax++
    }
    if (x < min) {
      min = x
      countMin++
    }
  })
  return [countMax, countMin]
}
