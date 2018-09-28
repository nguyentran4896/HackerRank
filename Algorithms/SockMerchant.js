// Sock Merchant
function sockMerchant(n, ar) {
  let temp, count = 0
  ar.sort((a, b) => a - b)
  temp = ar.pop()
  while (ar.length) {
    if (temp === ar[ar.length - 1]) {
      count++
      temp = ar.pop()
    }
    temp = ar.pop()
  }
  return count
}
