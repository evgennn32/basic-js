const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  error: false,
  getLength() {
    this.chain.length
    return this;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof +position == "number" && this.chain.length >= +position && 0 < +position){
      this.chain.splice(position-1,1);
    }else{
      this.chain = []
      throw new Error('THROW')
      this.error = true;
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    if(this.error){
      return;
    }
    let res = ''
    this.chain.forEach(el=>{
        if(res){
          res += '~~'
        }
        res += '( '+ el +' )';

    })
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
