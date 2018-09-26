// Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.map(x => x + a).filter(x => s <= x && x <= t).length)
  console.log(oranges.map(x => x + b).filter(x => s <= x && x <= t).length)
}
