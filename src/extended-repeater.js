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
function repeater(str, options) {
  let res = "";
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  const separator = options.separator ? options.separator : "+";
  let addition = `${options.addition}` ? `${options.addition}` : "";
  if (!options.addition && options.addition != undefined) {
    addition = `${options.addition}`;
  } else if (options.addition === undefined) {
    addition = "";
  }
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : "|";

  if (repeatTimes === 0) {
    res += str + addition;
  }

  for (let i = 1; i <= repeatTimes; i++) {
      res += `${str}`;
      
      if (Object.keys(options).length != 1) {
        for (let j = 1; j <= additionRepeatTimes; j++) {
          if (j != additionRepeatTimes) {
              res += `${addition}` + additionSeparator;
          } else {
              res += `${addition}`;
          }
        }
      }
      
      if (i != repeatTimes && repeatTimes != 1) res += separator;
  }
  
  return res;
}

module.exports = {
  repeater
};
