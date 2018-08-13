/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
       var patt1 =/([A-Za-z_]){0}(\d+((\.|,)\d+)?)([A-Za-z_]){0}(\/\d+)?/g;
           //\d+((.|,)\d+)?/g;<1?true:false
    
    var result = input.match(patt1);
    try{
    var testTwobackslash= input.toString().split('/').length>2?true:false
   var testcahainside= input.toString().match(/(\d+([A-z])){1}/g).length>1?true:false
     // console.log('getNum: '+result+' testTwobackslash: '+ testTwobackslash+'  testcahainside: '+testcahainside)
if(testTwobackslash||testcahainside)return 'invalid number';

  if(Boolean(result)){
    var num=1.00;
    try {
   //  num= Number.parseFloat(result)
     
     num=eval(result.toString())
}
catch(err) {
    try {
    num= Number.parseFloat(result)
    // num=eval(result.toString())
}
catch(err) {
    return 'invalid number';
   //console.log('getNum: '+result+' num: '+ num)
} 
   
}  // console.log('getNum: '+result+' num: '+ num)
    
      return num//.toString()
  }
    else if(isNaN(num)){
return '1';
  } else{
return 'invalid number';
}
    }
    catch(err) {
   return '1';
 
} 
  };
  
  this.getUnit = function(input) {
  var patt1 = /[A-z]+/g;
    var result = input.match(patt1);
  //console.log('getUnit: '+result)
    return ['gal','l','mi','km','lbs','kg'].includes(result.toString().toLowerCase())?result.toString():'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    const converterObj={gal:'l',l:'gal',lbs:'kg',kg:'lbs',mi:'km',km:'mi'};
  
    var result=  typeof initUnit!= "undefined"?(converterObj[initUnit.toLowerCase()]):'invalid unit';
    // console.log('getReturnUnit: '+result)
    return typeof result!= "undefined"?result:'invalid unit';
  };

  this.spellOutUnit = function(unit) {
     const converterObj={gal:'galons',l:'liters',lbs:'pounds',kg:'kilograms',mi:'miles',km:'kilometers'};
   var result=   typeof unit!= "undefined"?converterObj[unit.toLowerCase()]:'invalid unit';
    //console.log('spellOutUnit: '+result)
    return typeof result!= "undefined"?result:'invalid unit';
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var fromarr=['gal','lbs','mi'];
       var toarr=['l','kg','km']
       initUnit=initUnit.toLowerCase();
     var coef= initUnit=='gal'?galToL:initUnit=='l'?galToL:initUnit=='lbs'?lbsToKg:initUnit=='kg'?lbsToKg:initUnit=='mi'?miToKm:initUnit=='km'?miToKm:'invalid unit';
    
   
    var result=fromarr.includes(initUnit)?(initNum*coef):(initNum/coef);
  //  console.log('convert : is not number '+ isNaN(initNum)+' teda '+initNum+' jednotka '+ initUnit+'='+result.toFixed(5))
    return isNaN(result)?initNum:result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result= initNum+' '+this.spellOutUnit(initUnit)+' converts to '+ returnNum+' '+this.spellOutUnit(returnUnit);
    //string: '3.1 miles converts to 5.00002 kilometers'}
     console.log('getString initNum: '+initNum+!isNaN(initNum)+' initUnit '+(initUnit)+' returnNum'+ returnNum+' returnUnit '+(returnUnit))
    return result;
  };
  
}

module.exports = ConvertHandler;
