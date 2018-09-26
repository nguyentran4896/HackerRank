// Birthday Chocolate
function solve(s, d, m) {
  if (s.length < m) return 0
  let result = 0
  for (let times = 0; times < s.length - m + 1; times++) {
    let total = 0
    for (let i = times; i < m + times; i++) {
      total += s[i]
    }
    if (total === d) result += 1
  }
  return result
}
