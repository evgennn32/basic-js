const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {

 let turns =  Math.pow( 2,disksNumber)-1
  let time = Math.floor(turns/((turnsSpeed/60)/60))
  return {turns: turns, seconds: time}
};
