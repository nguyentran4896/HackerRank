// Viral Advertising
function viralAdvertising(n) {
  let tot, last_rnd;
  tot = 2
  last_rnd = 2;
  for (let i = 1; i < n; i++) {
    last_rnd = Math.floor((last_rnd * 3) / 2);
    tot += last_rnd;
  }
  return tot
}
