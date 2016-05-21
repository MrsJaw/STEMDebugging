var toRoman = function(number) {	
	var formatNumber = function(num, tenChar, fiveChar, oneChar) {

		console.log("num=" + num + ", " + tenChar + fiveChar + oneChar);
		switch ( num ) {
			case 1: return oneChar;
			case 2: return oneChar + oneChar;
			case 3: return oneChar + oneChar + oneChar;
			case 4: return oneChar + fiveChar;
			case 5: return fiveChar;
			case 6: return fiveChar + oneChar;
			case 7: return fiveChar + oneChar + oneChar;
			case 8: return fiveChar + oneChar + oneChar + oneChar;
			case 9: return oneChar + tenChar;
			default: return "";
		}
	};
	
	var romanNumber = "";
	var numberCharacters = number.toString().split(""); // JavaScript way to convert string to an array
	
	//iterate backwards through the list;
	var tenChar = null;
	for ( var i = numberCharacters.length-1; i >= 0; i-- ) {
		var digitPlace = numberCharacters.length - i; //1 is ones, 2 is hundreds, 3 is thousands...
		var digit = numberCharacters[i];
				
		console.log("iterating through list at index " + i + " and digit place " + digitPlace);
		
		var oneChar = tenChar ? tenChar : "I";
		var fiveChar = "";
		switch ( digitPlace ) { 
			case 1: 
				fiveChar = "V";
				tenChar = "X";
				break;
			case 10: 
				fiveChar = "L";
				tenChar = "C";
				break;
			case 100: 
				fiveChar = "D";
				tenChar = "M";
				break;
			case 1000: 
				fiveChar = ""; //none given for 1000's place
				tenChar = ""; //none given for 1000's place
				break;
		}
		
		romanNumber = formatNumber(tenChar, fiveChar, oneChar) + romanNumber;
	}	
	
	return romanNumber;
};
