const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

// '( value1 )~~( value2 )~~( value3 )'


const chainMaker = {
  start: '( ',
  mid: ' )~~( ',
  end: ' )',
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value+'');
    return chainMaker;
  },
  removeLink(position) {
    if(typeof(position) == 'number' && (position > 0 && position < this.arr.length + 1) && this.arr[position]){
      this.arr.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return chainMaker;
  },
  finishChain() {
    let chain = this.start + this.arr.join(this.mid) + this.end;
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};