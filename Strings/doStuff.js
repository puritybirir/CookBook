 /**
   * cleanData
   *
   * Tokenizes data
   *
   * @param {string}
   * @return {string}
   *
   *
*/
function cleanData(text) {
  const lowerCasedText = text.toLocaleLowerCase();
  const wordsArray = lowerCasedText.split(' ');
  wordsArray.reverse();

  const trimmedWords = [];
  for (let word in wordsArray) {
    trimmedWords.push(wordsArray[word].trim());
  }

  const longWords = [];
  for (let longWord in trimmedWords) {
    if (trimmedWords[longWord].length > 5) {
      longWords.push(trimmedWords[longWord]);
    }
  }

  let result = '';
  for (let longWord in longWords) {
    result += longWords[longWord];
    result += ', ';
  }

  return result.slice(0, -2);
}
