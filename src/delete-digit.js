const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split(''),
      acc = null;
  for(let i = 0; i < arr.length; i++){
    let temp = arr.map((v, j) => i == j ? null : v).join('');
    acc = temp > acc ? temp : acc;
  }
  return +acc;
}

module.exports = {
  deleteDigit
};