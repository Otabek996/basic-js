const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (commands.includes(arr[i])) {
      switch (arr[i]) {
        case '--discard-next':
          if (i + 1 < arr.length) i++;
          break;
        case '--discard-prev':
          if (res.at(-1) === arr[i - 1]) res.pop();
          break;
        case '--double-next':
          if (i + 1 < arr.length) res.push(arr[i + 1]);
          break;
        case '--double-prev':
          if (res.at(-1) === arr[i - 1] && i - 1 > 0) res.push(res.at(-1));
          break;
        default:
          break;
      }
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

module.exports = {
  transform
};
