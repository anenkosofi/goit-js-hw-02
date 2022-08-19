const findLongestWord = function (string) {
    let longestWord = string.split(' ')[0];
    for (let word of string.split(' ')) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'