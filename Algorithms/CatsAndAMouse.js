// Cats and a Mouse
function catAndMouse(x, y, z) {
  let xDistance = Math.abs(x - z)
  let yDistance = Math.abs(y - z)
  if (xDistance > yDistance) return 'Cat B'
  if (xDistance < yDistance) return 'Cat A'
  return 'Mouse C'
}
