const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    if (!String(value)) value = '';
    this.chains.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    if (Number(position) !== +position || (position >= this.chains.length || position - 1 < 0)) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },

  finishChain() {
    const res = this.chains.join("~~");
    this.chains = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
