var toRoman = function(number) {	
	var formatNumber = function(num, tenChar, fiveChar, oneChar) {
		//(1) I wrote this before I realized I was going to go through  
		// a character array, so I needed to update the cases from numbers to characters.
		// 
		//(2) that still didn't work, so added a console.logs to print debug statements
		console.log("num=" + num + ", " + tenChar + fiveChar + oneChar);
		switch ( num ) {
			case '1': return oneChar;
			case '2': return oneChar + oneChar;
			case '3': return oneChar + oneChar + oneChar;
			case '4': return oneChar + fiveChar;
			case '5': return fiveChar;
			case '6': return fiveChar + oneChar;
			case '7': return fiveChar + oneChar + oneChar;
			case '8': return fiveChar + oneChar + oneChar + oneChar;
			case '9': return oneChar + tenChar;
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
		
		// (3) yet another logging statement
		console.log("iterating through list at index " + i + " and digit place " + digitPlace);
		
		var oneChar = tenChar ? tenChar : "I";
		var fiveChar = "";
		switch ( digitPlace ) { //(5) I got the cases wrong, it had 1, 10, 100, 100, instead of 1, 2, 3, 4
			case 1: 
				fiveChar = "V";
				tenChar = "X";
				break;
			case 2: //10
				fiveChar = "L";
				tenChar = "C";
				break;
			case 3: //100
				fiveChar = "D";
				tenChar = "M";
				break;
			case 4: //1000
				fiveChar = ""; //none given for 1000's place
				tenChar = ""; //none given for 1000's place
				break;
		}
		
		//(4) Found the culprit - I forgot that formatNumber() takes 4 parameters and didn't include the digit 
		romanNumber = formatNumber(digit, tenChar, fiveChar, oneChar) + romanNumber;
	}	
	
	return romanNumber;
};
