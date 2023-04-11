const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let r = false;
  if(Array.isArray(members)){
    r = members.map(v => {
      if(typeof(v) == 'string'){
        return v.replace(/\s*/, '')[0]
         .toUpperCase();
      } else {
          return '';
      }
    }).sort().join('');
  }
  return r;
}

module.exports = {
  createDreamTeam
};
