const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  let r = false;
  console.log(sampleActivity);
  if(sampleActivity && (typeof(sampleActivity)==='string') && !isNaN(sampleActivity) && sampleActivity.match(/\d+.?\d*/)){
    let n = Number(sampleActivity);
    if (n > 0 && n < 15){
      let k = 0.693/HALF_LIFE_PERIOD;
      r = Math.ceil(Math.log(MODERN_ACTIVITY/n)/k);
    }
  }
  return r;
}

module.exports = {
  dateSample
};
