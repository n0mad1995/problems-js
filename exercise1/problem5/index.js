function removeABC(inputString) {
  if (!inputString.match(/[abc]/)) {
    return null;
  }

  const regex = /[abc]/g;
  return inputString.replace(regex, '');
}

module.exports = removeABC;
