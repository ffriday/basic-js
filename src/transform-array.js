const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// let a = [1, 2, 3, 4, 5];
// console.log(transform(a)===a);

function transform(arr) {
  let r = [],
      check = false;
  const fnParam = (s) => [s.split('-')[2], s.split('-')[3]];
    
  if(Array.isArray(arr)){
    if(arr.length > 0 ){
      r = [].concat(arr);
      for(i = 0; i < r.length; i++){
        if(typeof(r[i]) == 'string' && (r[i].includes('--discard')||r[i].includes('--double'))){
          let param = fnParam(r[i]);
          //remove
          if(param[0] == 'discard'){
            if(param[1] == 'prev'){
              r[i - 1] = null;
            } else {
              r[i + 1] = null;
            }
            r[i] = null;
            check = true;
          //add
          } else {
            if(param[1] == 'prev'){
              r[i] = r[i - 1];
            } else {
              r[i] = r[i + 1];
            }
            check = true;
          }
        }
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  console.log(check);
  console.log(r);
  r = r.filter(v => v);
  return check ? r : arr;
}

module.exports = {
  transform
};
