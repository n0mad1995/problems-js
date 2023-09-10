function numInStr(arr) {
  return arr.filter((str) => /\d/.test(str));
}
module.exports = numInStr;
