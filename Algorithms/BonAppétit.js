// Bon Appétit
function bonAppetit(bill, k, b) {
  let totalBill = bill.reduce((a, b) => a + b, 0)
  bill.splice(k, 1)
  let totalBillAnnaNotEat = bill.reduce((a, b) => a + b, 0)
  if (totalBillAnnaNotEat / 2 === b) console.log('Bon Appetit')
  else console.log(b - totalBillAnnaNotEat / 2)
}
