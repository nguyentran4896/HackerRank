// Minimum Distances
function minimumDistances(a) {
  let obj = {}, flags = {}
  a.map((x, i) => {
    if (obj[x] === undefined) obj[x] = i
    else {
      obj[x] = Math.abs(obj[x] - i)
      flags[x] = true
    }
  })

  let distances = Object.keys(obj)
    .map(x => {
      return {
        key: x,
        value: obj[x]
      }
    })
    .filter(x => {
      return flags[x.key]
    })
  if (!distances.length) return -1
  return Math.min(...distances.map(x => x.value))
}
