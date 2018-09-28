// Mars Exploration
function marsExploration(s) {
  let sos = ['S', 'O', 'S']
  return s.split('').filter((x, i) => {
    return x !== sos[i % 3]
  }).length
}
