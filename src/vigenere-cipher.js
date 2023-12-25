const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);
    let alp = [];
    for (let i = 65; i < 91; i++) alp.push(String.fromCharCode(i));
    let messages = message.toUpperCase().split("");
    let keys = key.toUpperCase().split("");
    let res = [];
    let counter = 0;
    for (let i = 0; i < messages.length; i++) {
      if (alp.indexOf(messages[i]) === -1) {
        res.push(messages[i]);
        continue;
      }
      let sum = alp.indexOf(messages[i]) + alp.indexOf(keys[counter]);
      let index = -1;
      if (alp.length - 1 - sum < 0) {
        index = Math.abs(alp.length - 1 - sum) - 1;
      } else index = sum;
      res.push(alp[index]);
      counter++;
      if (counter === keys.length) counter = 0;
    }

    const finalRes = this.reverse === false ? res.reverse().join("") : res.join("");
    return finalRes;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);
    let alp = [];
    for (let i = 65; i < 91; i++) alp.push(String.fromCharCode(i));
    let messages = message.toUpperCase().split("");
    let keys = key.toUpperCase().split("");
    let res = [];
    let counter = 0;
    for (let i = 0; i < messages.length; i++) {
      if (alp.indexOf(messages[i]) === -1) {
        res.push(messages[i]);
        continue;
      }
      let nm = alp.indexOf(messages[i]);
      let nk = alp.indexOf(keys[counter]);
      let index = 1 + (nm > nk) ? nm - nk : nk - nm;
      if (index < 0) index = alp.length + index;
      res.push(alp[index]);
      counter++;
      if (counter === keys.length) counter = 0;
    }

    const finalRes = this.reverse === false ? res.reverse().join("") : res.join("");
    return finalRes;
  }
}

module.exports = {
  VigenereCipheringMachine
};
