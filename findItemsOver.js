module.exports = function findItemsOver(qtyName, threshold) {
  var arrHighQty = [];
  for (var i = 0; i < qtyName.length; i++) {
    var index = qtyName[i];
    if (index.qty > threshold) {

      arrHighQty.push(index)
    }

  } return arrHighQty
}