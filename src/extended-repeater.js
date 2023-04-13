const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.


function repeater(str, options) {
  options.separator = options.separator||'+';
  options.additionSeparator = options.additionSeparator||'|'
  options.repeatTimes = options.repeatTimes||1;
  options.additionRepeatTimes = options.additionRepeatTimes||1;
  str === null ? str = 'null': '';
  options.addition === null ? options.addition = 'null' : '';
  let repeat = (s, rt, sep) => Array.from({length: rt}, (v, i) => s).join(sep);
  let add = repeat(options.addition, options.additionRepeatTimes, options.additionSeparator);
  return repeat(str + add, options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};