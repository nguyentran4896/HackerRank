// Day of the Programmer
function solve(year) {
  if (year < 1918) {
    let date = 12
    if (year % 4 !== 0 && year % 100 !== 0) date++
    return date + '.09.' + year
  } else if (year > 1918) {
    let date = 13
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) date--
    // if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) date++
    return date + '.09.' + year
  } else {
    let date = 26
    return date + '.09.' + year
  }
}
