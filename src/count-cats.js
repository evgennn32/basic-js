const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  if(typeof matrix != 'object' || !matrix){
    return false
  }
  let res = 0;
  matrix.forEach(el=> el.forEach(el=>{
    if(el =="^^"){
      res++;
    }
  }))
  return res;
};
