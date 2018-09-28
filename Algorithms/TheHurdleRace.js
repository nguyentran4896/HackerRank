// The Hurdle Race
function hurdleRace(k, height) {
  let result = Math.max(...height) - k
  return result > 0 ? result : 0
}
