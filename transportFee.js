module.exports = function transportFee(shift) {
  var transportCost
  if (shift === 'morning') {
    return transportCost = "R20"
  }
  if (shift === 'afternoon') {
    return transportCost = "R10"
  }
  else { return transportCost = "free" }
}  