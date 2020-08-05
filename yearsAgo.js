module.exports = function yearsAgo(year) {
  var date = new Date();

  var yearAgo = date.getFullYear() - year;
  return yearAgo;
}