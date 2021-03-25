const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {

    if(!Array.isArray(arr)){
      return;
    }
    let maxDepth = 0;
    let tempDeepth = 0;
   arr.forEach(el=>{
     if(Array.isArray(el)){
       tempDeepth = this.calculateDepth(el);
     }
     if(tempDeepth > maxDepth){
       maxDepth = tempDeepth;
     }
   })
    return maxDepth + 1;
  }
};
