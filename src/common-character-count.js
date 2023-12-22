const { NotImplementedError } = require("../extensions/index.js");

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
  const charMap1 = createCharMap(s1);
  const charMap2 = createCharMap(s2);

  let commonCount = 0;

  for (const char in charMap1) {
    if (charMap2[char]) {
      commonCount += Math.min(charMap1[char], charMap2[char]);
    }
  }

  return commonCount;
}

function createCharMap(str) {
  const charMap = {};

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  return charMap;
}

module.exports = {
  getCommonCharacterCount,
};
