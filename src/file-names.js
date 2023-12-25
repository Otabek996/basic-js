const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];

  for (let i = 0; i < names.length; i++) {
    let item = names[i];

    if (res.includes(item)) {
      let count = names.filter(
        (element, index) => element === item && index < i
      ).length;

      if (count < 1) {
        count = 1;
      } else {
        count = count;
      }

      item += "(" + count + ")";
    }

    res.push(item);
  }

  return res;
}

module.exports = {
  renameFiles,
};
