const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {
  let r = 'Unable to determine the time of year!',
      e = new Error('Invalid date!');
  if(date){
    try {
      r = 'Invalid date!';
      if(date instanceof Date){
        const season = ['winter', 'winter',
        'spring','spring', 'spring',
        'summer', 'summer', 'summer',
        'autumn', 'autumn', 'autumn',
        'winter'];
        r = season[date.getMonth()];
        date.setDate();
      } else {
        throw e;
      }
    } catch(error){
      throw e;
    }
  }
return r;
}

module.exports = {
  getSeason
};
