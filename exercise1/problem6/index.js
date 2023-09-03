function insertWhitespace(inputString) {
  const regex = /([a-z])([A-Z])/g;

  const resultString = inputString.replace(regex, '$1 $2');
  
  return resultString;
}

module.exports = insertWhitespace;
