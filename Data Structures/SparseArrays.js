// Sparse Arrays
function matchingStrings(strings, queries) {
  return queries.map(x => {
    let count = 0
    strings.forEach(s => {
      if (s === x) count++
    })
    return count
  })
}
