module.exports = function countAllFromTown(string, loc) {
  var emptyArray = [];
  var plates = string.split(",")
  for (var i = 0; i < plates.length; i++) {
    var platesPaarl = plates[i].trim()
    if (platesPaarl.startsWith(loc)) {
      emptyArray.push(platesPaarl);
    }
  }
  return emptyArray.length
  //console.log(plates)
}