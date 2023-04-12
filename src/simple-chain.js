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

// let a = chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()
// // , '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
// let b = chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()
// // , '( 8.963 )~~( 0 )~~( false )');
// let c = chainMaker.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink('DEF').finishChain()
// // , '( [object Object] )~~( 22 )~~( null )~~( DEF )');
// let d = chainMaker.addLink(3.14).addLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink('DEF').addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain()
// // , '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )');
// let e =chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain()
// // , '( 1.233 )~~( 1.233 )~~( DEF )~~( [object Object] )~~( ABC )');
//let b = chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain();
// console.log(e);