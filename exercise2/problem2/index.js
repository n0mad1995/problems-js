function sortIt(arr) {
  return arr.sort((a, b) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a[0] - b[0];
    } else if (Array.isArray(a)) {
      return a[0] - b;
    } else if (Array.isArray(b)) {
      return a - b[0];
    } else {
      return a - b;
    }
  });
}

module.exports = sortIt;
