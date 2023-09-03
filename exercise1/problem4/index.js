function makeTitleCase(inString) {

  const words = inStr.split(" ");
  const titleCaseWords = words.map(word => {
    if (word.length === 0) {
      return ""; 
    }
    return word[0].toUpperCase() + word.slice(1);
  });

  const titleString = titleWords.join(" ");

  return titleString;
}

module.exports = makeTitleCase;
