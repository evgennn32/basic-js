const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(!sampleActivity
      || typeof sampleActivity == "number"
      || typeof sampleActivity == "object"
      || isNaN(Number(sampleActivity))
      || Number(sampleActivity) <= 0
      || undefined == sampleActivity
      || Number(sampleActivity) > 15
  ){
    return false;
  }

  return Math.ceil(Math.log(15/sampleActivity)/(Math.LN2/5730));
};
