// Cut the sticks
function cutTheSticks(arr) {
  if (!arr.length) return []
  if (arr.length === 1) return [1]
  return [arr.length].concat(cutTheSticks(arr.map(x => x - Math.min(...arr)).filter(Boolean)))
}
