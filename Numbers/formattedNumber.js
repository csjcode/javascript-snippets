// This function returns a string padded with leading zeros

function padZeros(num, totalLen) {
   var numStr = num.toString();             // Initialize return value as string
   var numZeros = totalLen - numStr.length; // Calculate no. of zeros
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return console.log(numStr);
}

padZeros(65,3)
