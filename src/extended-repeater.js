const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {

  let addition = options.addition === undefined ? '' : options.addition;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  let separator = options.separator === undefined ? '+' : options.separator;
  let aditionTotal = addition
  if(options.additionRepeatTimes != undefined){
    for(let i = 2; i <= options.additionRepeatTimes; i++){
      aditionTotal += additionSeparator + addition
    }
  }
  let strTotal = str +aditionTotal;
  let res = str +aditionTotal
  if(options.repeatTimes != undefined){
    for(let i = 2; i <= options.repeatTimes; i++){
      res += separator + strTotal
    }
  }

  return res
};
  