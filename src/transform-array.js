const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(arr.length === 1 ) return []


  const discardPrev = (arr,newArr,currInd)=>{
    if(newArr) {
      newArr.pop()
      return newArr;
    }
    return newArr;
  }
  const doubleNext = (arr,newArr,currInd)=>{
    newArr.push(arr[currInd+1])
    return newArr
  }
  const doublePrev = (arr,newArr,currInd)=>{
    if(currInd > 0){
      newArr.push(arr[currInd-1])
    }
    return newArr
  };
  const prevIsNotSkipped = (arr,index)=>{
    if(index -2 >= 0 && arr[index - 2] !== '--discard-next' ){
      return true;
    }
  };
  const isNotCommand = (el)=>{
    if (el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev' )
      return true
  }

  let resArr = [];
  let skipNext = false;
  arr.forEach((el,index)=>{
    switch (el) {
      case '--discard-next':
        if(index < (arr.length - 1) && isNotCommand(arr[index+1]))
          skipNext = true;
        break;
      case '--discard-prev':
        if(index >= 0 && index< (arr.length - 1) && isNotCommand(arr[index-1]) ){
          resArr = discardPrev (arr, resArr, index);
        }
        skipNext = false;
        break;
      case '--double-next':
        if(index >= 0 && index< (arr.length - 1) && isNotCommand(arr[index+1]))
          resArr = doubleNext (arr, resArr, index);
        break;
      case '--double-prev':
        if(index >= 0 && index< (arr.length - 1) && isNotCommand(arr[index-1]) && prevIsNotSkipped(arr,index)){
          resArr = doublePrev (arr, resArr, index);
        }
        skipNext = false;
        break;
      default:
        if(!skipNext && el !== '' && el !== undefined){
          //console.log('resArr = ' + resArr)
          // console.log('el = ' + el)
          resArr.push(el)
        }else{
          skipNext = false;
        }

    }
  })
  //console.log('RESULT = ' + resArr)
  if(resArr[0] == 1 || resArr[0]== '' ){
    console.log(arr)
    console.log('RESULT = ' +resArr)
  }
  if(resArr == '')
    return []
  return resArr;
};
