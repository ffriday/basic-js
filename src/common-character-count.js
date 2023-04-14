const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  return s1.split('').reduce((acc, v) => {
    let i = s2.indexOf(v);
    if(i >= 0){
      acc += 1;
      s2 = s2.replace(v, '');
    }
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};

let a = getCommonCharacterCount('aabcc', 'adcaa');
console.log(a);