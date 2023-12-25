const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let obj = {};
  let res = [];

  arr.forEach((element, index) => {
    if (element === -1) {
      obj[index] = element;
    } else {
      res.push(element);
    }
  })
  
  res = res.sort((a, b) => {
    return a - b;
  });
  
  for (let i in obj) {
    res.splice(i, 0, obj[i]);
  }
  
  return res;
}

module.exports = {
  sortByHeight
};
