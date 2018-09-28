// Migratory Birds
function migratoryBirds(ar) {
  let countArr = [0, 0, 0, 0, 0]
  ar.map(t => {
    countArr[t - 1]++
  })
  return countArr.indexOf(Math.max(...countArr)) + 1
}
