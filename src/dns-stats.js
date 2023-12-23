const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};

  const p = `.${domains[0].split(".").slice(-1)[0]}`;
  
  let obj = {};
  
  domains.forEach(item => {
      if (Object.keys(obj).length === 0) {
          obj[`${p}`] = 0;
          obj[`.${item.split(".").reverse().join(".")}`] = 0;
      } else obj[`.${item.split(".").reverse().join(".")}`] = 0;
  })
  
  let objKeys = Object.keys(obj);
  
  objKeys.forEach(key => {
      domains.forEach(item => {
          let k = key.split(".").reverse().slice(0, -1).join(".");
          if (item.includes(k)) {
              obj[`${key}`]++;
          }
      })
  })
  
  return obj;
}

module.exports = {
  getDNSStats
};
