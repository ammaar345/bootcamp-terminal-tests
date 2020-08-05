module.exports = function countAllPaarl(strings) {
  var newArray = [];
  var plates = strings.split(", ");
  for (var i = 0; i < plates.length; i++) {
    var platesPaarl = plates[i];
    if (platesPaarl.startsWith("CJ")) {
      newArray.push(platesPaarl);
    }
  } return newArray.length;
}