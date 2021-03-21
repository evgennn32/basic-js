const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {


    if(!date) return 'Unable to determine the time of year!'

    if( Object.prototype.toString.call(date) == '[object Date]'){
        let month =  new Date(date).getMonth();
        if(month != undefined && !isNaN(month)){
            switch (month) {
                case 11:
                case 0:
                case 1:
                    return 'winter'
                    break;
                case 2:
                case 3:
                case 4:
                    return 'spring'
                    break;
                case 5:
                case 6:
                case 7:
                    return 'summer'
                    break;
                case 8:
                case 9:
                case 10:
                    return 'fall'
                    break;
                default:
                    return 'THROWN'
            }
        }else{
            throw new Error('THROWN');
        }
    }else{
        throw new Error('THROWN');
    }

};