const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);
    let acc = 0;
    if(!Array.isArray(arr)){
      return 0;
    } else {
      arr.length == 0 ? acc +=1 : '';
    }
    for(let i of arr){
      let temp = this.calculateDepth(i) + 1;
      acc = temp > acc ? temp : acc;
    }
    return acc;
  }
}

module.exports = {
  DepthCalculator
};

// const depthCalc = new DepthCalculator();
// console.log("DEPTH= " + depthCalc.calculateDepth([1, 2, 3, 4, [5, []], 2]));
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
// console.log(depthCalc.calculateDepth([[[]]]));