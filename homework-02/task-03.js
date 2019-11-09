console.log('task-02 start');

function findLongestWord(string) {
  let longestWord = ' ';
  const array = string.split(' ');

  for (let i = 0; i < array.length; i++) {
    longestWord = longestWord.length > array[i].length ? longestWord : array[i];
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
