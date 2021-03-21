const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 let res = []
 if( !Array.isArray(members) ){
  return false;
 }
 members.forEach(el=>{
  if(el && el!= undefined && typeof el == 'string'){
   res.push([...el.trim()][0].toUpperCase())
  }
 })
 return res.sort().join('');
};
