// CamelCase
function camelcase(s) {
  return s.split('').filter(x => {
    return x === x.toUpperCase()
  }).length + 1
}
