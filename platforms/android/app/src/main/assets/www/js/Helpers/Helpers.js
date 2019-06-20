function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
function CheckDecimal(val) { 
    if( parseFloat(val)<=0 ){
      return true;
    }
    else{
      var validChars = '0123456789.';
      for(var i = 0; i < val.length; i++) {
        if(validChars.indexOf(val.charAt(i)) == -1)
        return false;
      }
      return true;
    }
  } 