const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const elements = str.split("");
  let code = [];
  
  let index = 1;
  for (let i = 1; i <= elements.length; i++) {
      if (elements[i - 1] === elements[i]) {
          index++;
      } else if (index === 1) {
          code.push(elements[i - 1]);
      } else {
          code.push(`${index}`);
          code.push(elements[i - 1]);
          index = 1;
      }
  }
  
  const res = code.join("");
  
  return res;
}

module.exports = {
  encodeLine
};
